import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ScreenTheFirst from "../screens/ScreenTheFirst";
import ScreenTwo from "../screens/ScreenTwo";
import ThirdScreen from "../screens/ThirdScreen";
import FinaleScreen from "../screens/FinaleScreen";
import ErrorPage from "../screens/ErrorPage";
import App from "../App";

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
        // action: favoriteAction,
      },
      {
        path: "/results",
        element: <ThirdScreen />,
        // action: editAction,
      },
      {
        path: "/stats",
        element: <FinaleScreen />,
        // action: destroyAction,
      },
    ],
  },
]);

export const RootNavigation = () => {
  return <RouterProvider router={router} />;
};
