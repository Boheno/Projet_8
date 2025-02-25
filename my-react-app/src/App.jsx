import { createBrowserRouter } from "react-router-dom"

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Error from "./Components/Error/Error.jsx";

import About from "./Components/About/About.jsx"
import Project from "./Components/Projets/Projets.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<> <Header /> <About /> <Project /> <Footer /> </>),
  },
  
  {
    path: "*",
    element: (<><Header /> <Error /> <Footer /> </>),
  },
]);

export default router
