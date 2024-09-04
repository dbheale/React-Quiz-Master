import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ScreenTheFirst from "../screens/options/ScreenTheFirst";
import ScreenTwo from "../screens/quiz/ScreenTwo";
import ThirdScreen from "../screens/results/ThirdScreen";
import FinaleScreen from "../screens/statistics/FinaleScreen";
import ErrorPage from "../screens/ErrorPage";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store";
import AudioPlayer from "../components/AudioPlayer";
import { Routes } from "../constants/routes";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ScreenTheFirst /> },
      {
        path: Routes.Quiz,
        element: <ScreenTwo />,
      },
      {
        path: Routes.Results,
        element: <ThirdScreen />,
      },
      {
        path: Routes.Statistics,
        element: <FinaleScreen />,
      },
    ],
  },
]);

export const RootNavigation = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <AudioPlayer />
    </Provider>
  );
};
