import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HelloWorld from "../pages/HelloWorld";
import MainPage from "../pages/MainPage";
import MyselfPage from "../pages/MyselfPage";
import PeoplePage from "../pages/PeoplePage";
import SettingsPage from "../pages/SettingsPage";
import PersonPage from "../pages/PersonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "myself",
        element: <MyselfPage />,
      },
      {
        path: "people",
        element: <PeoplePage />,
      },
      {
        index: true,
        element: <PeoplePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "@:person",
        element: <PersonPage />,
      },
    ],
  },
  {
    path: "/helloworld",
    element: <HelloWorld />,
  },
]);

export default router;
