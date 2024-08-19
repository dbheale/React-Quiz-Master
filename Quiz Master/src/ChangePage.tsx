import { useGameContext } from "./hooks/GameContext";

const ChangePage = (args: { text: string, pageIndex: number, beforeChange?: () => void, afterChange?: () => void }) => {
  const context = useGameContext();

  const buttonClicked = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(args.beforeChange){
      args.beforeChange();
    }
    
    context.setPage(args.pageIndex)

    if(args.afterChange){
      args.afterChange();
    }
  }

  return (
    <div className="card">
      <button onClick={buttonClicked}>{args.text}</button>
    </div>
  );
};

export default ChangePage;
