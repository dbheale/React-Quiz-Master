import { useDispatch, useSelector } from "react-redux";
import ChangePageButton from "../../components/ChangePageButton";
import { Routes } from "../../constants/Routes";
import { resetStatistics } from "../../store/slices/statisticsSlice";
import { statisticsSelector } from "../../store/selectors";

const StatisticsPartial = () => {
  const stats = useSelector(statisticsSelector);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetStatistics()); // Resets the persisted statistics
  };

  //console.log("stats:", stats)
  
  return (
    <>
      <span className="flex-span">
        <ChangePageButton text={"Return Home"} page={Routes.Home} />
        <button onClick={handleReset}>Reset my Statistics</button>
      </span>
    </>
  );
};
export default StatisticsPartial;
