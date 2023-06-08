import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import ContactSeller from "./ContactSeller";
import { useContext } from "react";
import styled from "styled-components";
import FirstModal from "./components/FirstModal";
import "./Home.css";
import { ProductContext } from "./ProductContext";
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

const Home: React.FC = () => {
    const { products, setProducts } = useContext(ProductContext);
    const [isFirstModalOpen, setFirstModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    const handleProductClick = (
        id: number,
        lat: number,
        lng: number,
        address: string
    ) => {
        setSelectedProductId(id);
        console.log("rad 44", setSelectedProductId(id));
        console.log("rad 45", id);

        const pr = products;

        pr.forEach((product) => {
            product.isOpen = product.id === id;

            if (product.id === id) {
                console.log("isOpen: " + id);
            }
        });

        setProducts([...pr]);
        setFirstModalOpen(true);

        console.log("Öppna produkt med ID:", id);
    };

    const mapContainerStyle = {
        width: "100%",
        height: "95vh",
        marginTop: "-100px",
    };

    function getIcon(category: string) {
        let url = "";

        switch (category) {
            case "Elektronik":
                url = "/ux ikoner/76h/ElectronicsPin76vh.png";

                break;

            case "Fordon":
                url = "/ux ikoner/76h/VehiclePin76vh.png";

                break;

            case "Fritid":
                url = "/ux ikoner/76h/SportPin76vh.png";

                break;

            case "Hushåll":
                url = "/ux ikoner/76h/HomePin76vh.png";

                break;

            case "Kläder":
                url = "/ux ikoner/76h/ClothesPin76vh.png";

                break;

            case "Övrigt":
                url = "/ux ikoner/76h//OtherPin76vh.png";

                break;
        }

        return url;
    }

    function getVisitedIcon(category: string) {
        let url = "";

        switch (category) {
            case "Elektronik":
                url = "/ux ikoner/76h/ElectronicsPinVisited76vh.png";

                break;

            case "Fordon":
                url = "/ux ikoner/76h/VehiclePinVisited76vh.png";

                break;

            case "Fritid":
                url = "/ux ikoner/76h/SportPinVisited76vh.png";

                break;

            case "Hushåll":
                url = "/ux ikoner/76h/HomePinVisited76vh.png";

                break;

            case "Kläder":
                url = "/ux ikoner/76h/ClothesPinVisited76vh.png";

                break;

            case "Övrigt":
                url = "/ux ikoner/76h//OtherPinVisited76vh.png";

                break;
        }

        return url;
    }

    const center = {
        lat:57.70399615681416,
        lng: 11.982771486438951
    };

    const yourMapStyle = [
        {
            featureType: "all",

            elementType: "labels.text",

            stylers: [
                {
                    color: "#878787",
                },
            ],
        },

        {
            featureType: "all",

            elementType: "labels.text.stroke",

            stylers: [
                {
                    visibility: "off",
                },
            ],
        },

        {
            featureType: "landscape",

            elementType: "all",

            stylers: [
                {
                    color: "#fbf5e9",
                },

                {
                    visibility: "simplified",
                },
            ],
        },

        {
            featureType: "poi",

            elementType: "all",

            stylers: [
                {
                    visibility: "off",
                },
            ],
        },

        {
            featureType: "road",

            elementType: "all",

            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },

        {
            featureType: "road.highway",

            elementType: "all",

            stylers: [
                {
                    color: "#f5f5f5",
                },

                {
                    visibility: "off",
                },
            ],
        },

        {
            featureType: "road.highway",

            elementType: "geometry.stroke",

            stylers: [
                {
                    color: "#c9c9c9",
                },
            ],
        },

        {
            featureType: "road.highway",

            elementType: "labels",

            stylers: [
                {
                    visibility: "off",
                },
            ],
        },

        {
            featureType: "road.arterial",

            elementType: "all",

            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },

        {
            featureType: "road.local",

            elementType: "all",

            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },

        {
            featureType: "water",

            elementType: "all",

            stylers: [
                {
                    color: "#aee0f4",
                },
            ],
        },
    ];

    const mapOptions = {
        zoomControl: false,

        mapTypeControl: false,

        scaleControl: false,

        streetViewControl: false,

        rotateControl: false,

        fullscreenControl: false,
    };

    return (
        <>
            {products.length > -1 &&
                products.map(
                    (product) =>
                        product.isOpen === true && (
                            <FirstModal
                                key={product.id}
                                selectedProductId={selectedProductId}
                            />
                        )
                )}
            {/* {products.map(
                (product) =>
                    product.isOpen === true && (
                        <FirstModal
                            key={product.id}
                            selectedProductId={selectedProductId}
                        />
                    )
            )} */}
            <LoadScript googleMapsApiKey="AIzaSyD4PHr_hX_LqK6x9AHG_heaXXrgKNIlDDk">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13}
                    options={{
                        styles: yourMapStyle,

                        ...mapOptions,
                    }}
                >
                    {products.map((product) => (
                        <Marker
                            icon={getIcon(product.category)}
                            key={product.id}
                            position={{
                                lat: product.latitude,

                                lng: product.longitude,
                            }}
                            data-value={product}
                            onClick={() => {
                                handleProductClick(
                                    product.id,

                                    57.64830564055332,
                                    12.015885887454772,

                                    "Mölndal"
                                );
                            }}
                        ></Marker>
                    ))}
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default Home;
