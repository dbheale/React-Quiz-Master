import { createBrowserRouter, RouterProvider } from "react-router-dom";

import OptionsPartial from "../screens/options/OptionsPartial";
import QuizPartial from "../screens/quiz/QuizPartial";
import ResultsPartial from "../screens/results/ResultsPartial";
import StatisticsPartial from "../screens/statistics/StatisticsPartial";
import ErrorPage from "../screens/ErrorPage";
import App from "../App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import AudioPlayer from "../components/AudioPlayer";
import { Routes } from "../constants/Routes";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <OptionsPartial /> 
      },
      {
        path: Routes.Quiz,
        element: <QuizPartial />,
      },
      {
        path: Routes.Results,
        element: <ResultsPartial />,
      },
      {
        path: Routes.Statistics,
        element: <StatisticsPartial />,
      },
    ],
  },
]);

export const RootNavigation = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <AudioPlayer />
      </PersistGate>
    </Provider>
  );
};
