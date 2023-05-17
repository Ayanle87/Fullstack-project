import React from "react";
import "./App.css";
import Home from "./Home";
import "./navbar.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import TestView from "./views/TestView";
// import ObjectCard from "./components/ObjectCard";
import Root from "./Root";
import CustomNavbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

const App: React.FC = () => {
  const router = createHashRouter([
    {
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <TestView />,
          path: "/object",
        },
      ],
      element: <Root />,
    },
  ]);

  return (
    <div className="App">
      <div>
        <MobileNavbar />
      </div>
      <div className="content-wrapper">
        <RouterProvider router={router} />
      </div>
      <div>
        <CustomNavbar />
      </div>
      <div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default App;
