import { Outlet } from "react-router-dom";
import "./App.css";
import GameContextProvider from "./GameContextProvider";

const App = () => {
  return (
    <>
      <h1>Quiz Master</h1>
      <GameContextProvider>
        <Outlet />
      </GameContextProvider>

      <img className="logo" src="./QuizMaster.png" />
    </>
  );
};

export default App;
