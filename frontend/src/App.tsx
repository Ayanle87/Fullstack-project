import React from "react";
import "./App.css";

import { UserContext } from "./UserContext";

import Home from "./Home";
import "./navbar.css";
import "./MobileNavbar.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import TestView from "./views/TestView";

import Root from "./Root";
import CustomNavbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

import ObjectCard from "./components/ObjectCard";
import SmallModal from "./components/SmallModal";
import BigModal from "./components/BigModal";
import Pins from "./components/Pins";

const App: React.FC = () => {
    // const router = createHashRouter([
    //     {
    //         children: [
    //             {
    //                 element: <Home />,
    //                 path: "/",
    //             },
    //             {
    //                 element: <TestView />,
    //                 path: "/object",
    //             },
    //         ],
    //         element: <Root />,
    //     },
    // ]);

    return (
        <div className="App">
            <div>
                <MobileNavbar />
            </div>
            <div>
                <SmallModal />
            </div>

            <div>{/* <ObjectCard/> */}</div>

            <div className="content-wrapper">
                {/* <RouterProvider router={router} /> */}
            </div>

            <div>
                <Home />
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
