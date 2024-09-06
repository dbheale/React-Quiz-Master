import { useSelector } from "react-redux";
import { types, times, difficulties } from "../../constants/ValueOptions";
import { categoriesSelector, settingsSelector } from "../../store/selectors";
import { getOptionValueLabel } from "../../components/DescriptiveSelectList";

const OptionSummary = () => {
  const gameSettings = useSelector(settingsSelector);
  const categories = useSelector(categoriesSelector);
  return (
    <div className="config-summary">
      <p>Config</p>
      <p>Type: {getOptionValueLabel(types, gameSettings?.type)}</p>
      <p>Category: {getOptionValueLabel(categories, gameSettings?.category)}</p>
      <p>Time: {getOptionValueLabel(times, gameSettings?.timeLimit)}</p>
      <p>Difficulty: {getOptionValueLabel(difficulties, gameSettings?.difficulty)}</p>
    </div>
  );
};
export default OptionSummary;
