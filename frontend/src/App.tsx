import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import "./navbar.css";
import "./MobileNavbar.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import TestView from "./views/TestView";

import Root from "./Root";
import CustomNavbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";
import axios from "axios";

import ObjectCard from "./components/ObjectCard";
import SmallModal from "./components/SmallModal";
import BigModal from "./components/BigModal";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

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

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <MobileNavbar />
      </div>
      <div>
        <SmallModal products={products} />

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
        <MobileFooter products={products} />
      </div>
    </div>
  );
};

export default App;
