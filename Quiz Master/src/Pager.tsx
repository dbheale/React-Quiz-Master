import { useContext } from "react";
import { GameContext } from "./GameContext";
import FinaleScreen from "./screens/FinaleScreen";
import ScreenTheFirst from "./screens/ScreenTheFirst";
import ScreenTwo from "./screens/ScreenTwo";
import ThirdScreen from "./screens/ThirdScreen";

const Pager = () => {
  const gameContext = useContext(GameContext);
  return (
    <div>
      {gameContext.page == 0 ? <ScreenTheFirst /> : undefined}
      {gameContext.page == 1 ? <ScreenTwo /> : undefined}
      {gameContext.page == 2 ? <ThirdScreen /> : undefined}
      {gameContext.page == 3 ? <FinaleScreen /> : undefined}
    </div>
  );
};

export default Pager;
