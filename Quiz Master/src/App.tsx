import "./App.css";
import GameContextProvider from "./GameContextProvider";
import Pager from "./Pager";

const App = () => {

  return (
    <>
      <h1>Quiz Master</h1>
      <GameContextProvider>
        <Pager/>
      </GameContextProvider>

      <img className="logo" src="./QuizMaster.png" />
    </>
  );
};

export default App;
