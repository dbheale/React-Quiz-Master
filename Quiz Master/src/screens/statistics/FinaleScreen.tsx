import { useDispatch, useSelector } from "react-redux";
import ChangePageButton from "../../components/ChangePageButton";
import { Routes } from "../../constants/routes";
import { resetStatistics } from "../../store/slices/statisticsSlice";
import { RootState } from "../../store";

const FinaleScreen = () => {
  const stats = useSelector((state: RootState) => state.statistics);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetStatistics()); // Resets the persisted statistics
  };

  console.log("stats:", stats)

  return (
    <>
      <span className="flex-span">
        <ChangePageButton text={"Return Home"} page={Routes.Home} />
        <button onClick={handleReset}>Reset my Statistics</button>
      </span>
    </>
  );
};
export default FinaleScreen;
