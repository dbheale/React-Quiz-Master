import { useGameContext } from "./hooks/GameContext";

const ChangePageButton = (args: { text: string, pageIndex: number, className?: string, beforeChange?: () => boolean, afterChange?: () => void }) => {
  const context = useGameContext();
  const buttonClicked = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(args.beforeChange){
      if(!args.beforeChange()){
        return;
      }
    }
    
    context.setPage(args.pageIndex)

    if(args.afterChange){
      args.afterChange();
    }
  }

  return (
    <div className={`card ${args.className}`}>
      <button onClick={buttonClicked}>{args.text}</button>
    </div>
  );
};

export default ChangePageButton;
