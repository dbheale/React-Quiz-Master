import { Outlet } from "react-router-dom";
import "./App.css";
import { AppDispatch } from "./store";
import { useEffect } from "react";
import { fetchCategories } from "./store/slices/categoriesSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <h1>Quiz Master</h1>
      <Outlet />
      <img className="logo" src="./QuizMaster.png" />
    </>
  );
};

export default App;
