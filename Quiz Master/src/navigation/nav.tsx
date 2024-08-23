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
        path: "todos/:todoid",
        element: <ScreenTwo />,
        // action: favoriteAction,
      },
      {
        path: "todos/:todoid/edit",
        element: <ThirdScreen />,
        // action: editAction,
      },
      {
        path: "todos/:todoid/destroy",
        element: <FinaleScreen />,
        // action: destroyAction,
      },
    ],
  },
]);

export const RootNavigation = () => {
  return <RouterProvider router={router} />;
};
