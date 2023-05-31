import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import ProductContext from "./ProductContext";
import Home from "./Home";
import "./navbar.css";
import "./MobileNavbar.css";
import ContactSeller from "./ContactSeller";
import CustomNavbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    longitude: number;
    latitude: number;
}

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [pins, setPins] = useState<number[]>([]);
    const [selectedPinId, setSelectedPinId] = useState<number | null>(null);
    const openModal = () => {
        setSelectedPinId(pins[pins.length - 1]);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8080/")
            .then((response) => {
                response.data.forEach((pr: Product) => {
                    pr.latitude = Math.random() * 0.03 + 57.70090604681059;
                    pr.longitude = Math.random() * 0.04 + 11.974023638297332;
                });
                console.log("hej: " + response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="App">
            {/* userContext funkar på alla komponenter som ligger i denna. Products, pins, setProducts och setPins bestäms i ProductContext. Behöver ni lägga till ngt där så måste det också skrivas här. */}
            <ProductContext.Provider
                value={{ allProducts, products, pins, setProducts, setPins }}
            >
                <div>
                    <MobileNavbar />
                </div>
                <div></div>
                <div>
                    <Home />
                </div>
                <div>
                    <ContactSeller />
                </div>
                <div className="content-wrapper"></div>
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
