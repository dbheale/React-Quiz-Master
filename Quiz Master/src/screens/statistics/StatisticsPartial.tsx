import { useDispatch, useSelector } from "react-redux";
import ChangePageButton from "../../components/ChangePageButton";
import { Routes } from "../../constants/Routes";
import { resetStatistics } from "../../store/slices/statisticsSlice";
import { statisticsSelector } from "../../store/selectors";
import StatisticSummary from "./StatisticSummary";

const StatisticsPartial = () => {
  const stats = useSelector(statisticsSelector);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetStatistics()); // Resets the persisted statistics
  };

  return (
    <>
      <span className="flex-span">
        <span>Total Questions Answered: {stats.totalQuestionsAnswered}</span>
        <span>Total Questions Correct: {stats.correctAnswers}</span>
      </span>
      <StatisticSummary statistic={stats.questionsByCategory} type={"Category"}/>
      <StatisticSummary statistic={stats.questionsByDifficulty} type={"Difficulty"}/>
      <StatisticSummary statistic={stats.questionsByType} type={"Type"}/>
      <span className="flex-span">
        <ChangePageButton text={"Return Home"} page={Routes.Home} />
        <button onClick={handleReset}>Reset my Statistics</button>
      </span>
    </>
  );
};
export default StatisticsPartial;
