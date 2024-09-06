import ChangePageButton from "../../components/ChangePageButton";
import { Routes } from "../../constants/routes";

const FinaleScreen = () => {
  return (
    <>
      <span className="flex-span">
        <ChangePageButton text={"Return Home"} page={Routes.Home} />
      </span>
    </>
  );
};
export default FinaleScreen;
