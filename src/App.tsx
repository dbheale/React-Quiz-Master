import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { AppDispatch } from "./store";
import { useEffect } from "react";
import { fetchCategories } from "./store/slices/categoriesSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const App = () => {
  const location = useLocation(); // Track location changes
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <h1>Quiz Master</h1>
      <motion.div
        key={location.key}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
      <img className="logo" src="./QuizMaster.png" alt="Quiz Master Logo" />
    </>
  );
};

export default App;
