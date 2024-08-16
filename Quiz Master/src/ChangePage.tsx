import { useContext } from "react";
import { GameContext } from "./GameContext";

const ChangePage = (args: { text: string, pageIndex: number, beforeChange?: () => void, afterChange?: () => void }) => {
  const context = useContext(GameContext);

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
