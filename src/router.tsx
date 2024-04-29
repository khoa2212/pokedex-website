import { createBrowserRouter } from "react-router-dom";
import HomeContainers from "./containers/HomeContainers";
import PokeHomePage from "./pages/PokeHomePage/PokeHomePage";
import PokeDetailPage from "./pages/PokeDetailPage/PokeDetailPage";

const router = createBrowserRouter([
  {
    element: <HomeContainers />,
    children: [
      {
        path: "/",
        element: <PokeHomePage />,
      },
      {
        path: "/pokemon/:id",
        element: <PokeDetailPage />,
      },
    ],
  },
]);

export default router;
