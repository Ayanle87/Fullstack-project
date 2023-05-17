import React from "react";
import "./App.css";
import Home from "./Home";
import "./navbar.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import TestView from "./views/TestView";

import Root from "./Root";
// import ObjectCard from "./components/ObjectCard";

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
            {/* <TestView /> */}
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
