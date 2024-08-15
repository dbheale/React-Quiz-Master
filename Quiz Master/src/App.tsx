import ScreenTheFirst from "./screens/ScreenTheFirst";
import ScreenTwo from "./screens/ScreenTwo";
import ThirdScreen from "./screens/ThirdScreen";
import BookEndScreen from "./screens/BookEndScreen";
import "./App.css";
import { GameOptions } from "./GameOptions";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState(0);
  const [gameOptions, setGameOptions] = useState<GameOptions>();

  const startGame = (options: GameOptions) =>{
    setGameOptions(options);
    console.log(gameOptions);
    setPage(1);
  }

  return (
    <>
      <h1>Quiz Master</h1>
      {page == 0 ? <ScreenTheFirst onStartGame={startGame} /> : undefined}
      {page == 1 && gameOptions !== undefined ? <ScreenTwo options={gameOptions} /> : undefined}
      {page == 2 ? <ThirdScreen /> : undefined}
      {page == 3 ? <BookEndScreen /> : undefined}

      <img className="logo" src="./QuizMaster.png" />
    </>
  );
}

export default App;
