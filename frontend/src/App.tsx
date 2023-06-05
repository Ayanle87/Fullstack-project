import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import ProductContext from "./ProductContext";
import Home from "./Home";
import "./navbar.css";
import "./MobileNavbar.css";
import ContactSeller from "./ContactSeller";
import "./ContactSeller.css";
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
    const [visitedPins, setVisitedPins] = useState<number[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
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
                setAllProducts(response.data);
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
                <div>
                    <Home />
                </div>

                <div className="content-wrapper"></div>

                <div>
                    <MobileFooter />
                </div>

            </ProductContext.Provider>

            <div>
                <CustomNavbar />
            </div>
        </div>
    );
};

export default App;
