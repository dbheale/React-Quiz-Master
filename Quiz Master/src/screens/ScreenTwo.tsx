import "./ScreenTwo.css";
import ProgressBar from "../ProgressBar";
import ChangePageButton from "../components/ChangePageButton";
import QuestionRenderer from "../components/QuestionRenderer";

const ScreenTwo = () => {
  return (
    <div className="wrapper">
      <QuestionRenderer />
      <span className="flex-span">
        <ChangePageButton text={"End quiz"} page={'/'} prompt={true} />
        <ProgressBar />
      </span>
    </div>
  );
};

export default ScreenTwo;
