import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Top_App_Page" replace={true} />,
  },
  {
    path: "/:name",
    element: <App />,
  },
]);

export default router;
