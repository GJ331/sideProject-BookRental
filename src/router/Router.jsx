import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Trending from "../pages/Trending/Trending";
import NewReleases from "../pages/NewReleases/NewReleases";
import Upcoming from '../pages/Upcoming/Upcoming';
import Favorites from '../pages/Favorites/Favorites';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/newReleases",
        element: <NewReleases />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      }
    ],
  },
]);

export default Router;
