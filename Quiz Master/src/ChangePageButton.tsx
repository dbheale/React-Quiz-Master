import { NavLink } from "react-router-dom";

const ChangePageButton = (args: {
  text: string;
  page: string;
  className?: string;
  beforeChange?: () => boolean;
  afterChange?: () => void;
}) => {
  return (
    <div className={`card ${args.className}`}>
      <NavLink onClick={args.beforeChange} onChange={args.afterChange} to={args.page}><button>{args.text}</button></NavLink>
    </div>
  );
};

export default ChangePageButton;
