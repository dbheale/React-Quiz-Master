import { useContext } from "react";
import { GameContext } from "./GameContext";
import BookEndScreen from "./screens/BookEndScreen";
import ScreenTheFirst from "./screens/ScreenTheFirst";
import ScreenTwo from "./screens/ScreenTwo";
import ThirdScreen from "./screens/ThirdScreen";

const Pager = () => {
  const gameContext = useContext(GameContext);
  return (
    <div>
      {gameContext.page == 0 ? <ScreenTheFirst /> : undefined}
      {gameContext.page == 1 && gameContext.options !== undefined ? (
        <ScreenTwo options={gameContext.options} />
      ) : undefined}
      {gameContext.page == 2 ? <ThirdScreen /> : undefined}
      {gameContext.page == 3 ? <BookEndScreen /> : undefined}
    </div>
  );
};

export default Pager;
