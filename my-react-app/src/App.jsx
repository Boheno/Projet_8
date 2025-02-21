import { createBrowserRouter } from "react-router-dom"

import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<> <Header /> <Footer /> </>),
  },
  
  {
    path: "*",
    element: (<><Header /> <Footer /> </>),
  },
]);

export default router
