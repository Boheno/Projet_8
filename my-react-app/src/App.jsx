import { createBrowserRouter } from "react-router-dom"
import projets from "../projets.json"

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Error from "./Components/Error/Error.jsx";

import About from "./Components/About/About.jsx"
import GenerateCards from "./Components/Projets/Projets.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<> <Header /> <About /> <GenerateCards projets={projets} /> <Footer /> </>),
  },
  
  {
    path: "*",
    element: (<><Header /> <Error /> <Footer /> </>),
  },
]);

export default router
