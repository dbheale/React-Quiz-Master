import ChangePage from "../ChangePage";

const ThirdScreen = () => {
  return (
    <>
      <p>🍝</p>
      <span className="flex-span">
        <div className="card">
          <ChangePage text={"Return Home"} pageIndex={0} />
        </div>
        <div className="card">
          <ChangePage text={"See my statistics"} pageIndex={3} />
        </div>
      </span>
    </>
  );
};
export default ThirdScreen;
