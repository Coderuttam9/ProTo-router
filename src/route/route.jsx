import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import About from "../pages/About/About";
import publicRouter from "./PublicRoute";

// create router
const router = createBrowserRouter([
{
    element:<Layouts/>,
    children:[...publicRouter]
}
]);

export default router;
