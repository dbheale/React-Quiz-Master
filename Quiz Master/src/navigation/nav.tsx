import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ScreenTheFirst from "../screens/ScreenTheFirst";
import ScreenTwo from "../screens/ScreenTwo";
import ThirdScreen from "../screens/ThirdScreen";
import FinaleScreen from "../screens/FinaleScreen";
import ErrorPage from "../screens/ErrorPage";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store";
import AudioPlayer from "../components/AudioPlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ScreenTheFirst /> },
      {
        path: "/quiz",
        element: <ScreenTwo />,
      },
      {
        path: "/results",
        element: <ThirdScreen />,
      },
      {
        path: "/stats",
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
