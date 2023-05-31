import React, { useState, useEffect, useContext } from "react";
import "./App.css";

import ProductContext from "./ProductContext";

import Home from "./Home";
import "./navbar.css";
import "./MobileNavbar.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
// import ModalPins from "./components/ModalPins";
import styled from "styled-components";
import ContactSeller from "./ContactSeller";
import Root from "./Root";
import CustomNavbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";
import axios from "axios";

import SmallModal from "./components/SmallModal";
import BigModal from "./components/BigModal";

import Test from "./components/Test";
import TestPins from "./components/TestPins";

import ModalFunction from "./components/ModalFunction";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    // lat: number;
    // long: number;
}

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [pins, setPins] = useState<number[]>([]);
    const [visitedPins, setVisitedPins] = useState<number[]>([]);

    const [selectedPinId, setSelectedPinId] = useState<number | null>(null);
    const openModal = () => {
        setSelectedPinId(pins[pins.length - 1]);
    };

    //Fetchar produktera, sparas i setProduct som är
    useEffect(() => {
        axios
            .get("http://localhost:8080/")
            .then((response) => {
                console.log("hej: " + response.data)
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

            {/* userContext funkar på alla komponenter som ligger i denna. Products, pins, setProducts och setPins bestäms i ProductContext. Behöver ni lägga till ngt där så måste det också skrivas här. */}
            <ProductContext.Provider
                value={{ allProducts, products, pins, setProducts, setPins }}
            >
                {/* <Test /> */}
                <div>
                    {products.map((product) => (
                        <TestPins
                            key={product.id}
                            id={product.id}
                            category={product.category}
                            visitedPins={visitedPins}
                            setPins={setPins}
                            setSelectedPinId={setSelectedPinId}
                        />
                    ))}
                </div>
                <div>
                    <Home />
                </div>
                <div>
                    <SmallModal products={products} selProduct={1}/>
                </div>
                <div>
                    {" "}
                    <ContactSeller />
                </div>{" "}


                <div>{/* <ObjectCard/> */}</div>

                <div className="content-wrapper">
                    {/* <RouterProvider router={router} /> */}
                </div>

                <div>
                    <CustomNavbar />
                </div>

                <div>
                    <MobileFooter products={products} />

                </div>
            </ProductContext.Provider>
        </div>
    );
};

export default App;
