import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
// create public router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/team",
    element:<Team/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },{
    path:"/blog",
    element:<Blog/>
  }
 
];

export default publicRouter;
