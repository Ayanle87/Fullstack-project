import React, { useState, useEffect } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import ContactSeller from "./ContactSeller";

import { useContext } from "react";

import styled from "styled-components";

import FirstModal from "./components/FirstModal";

import { ProductContext } from "./ProductContext";

interface Product {
    id: number;

    name: string;

    price: number;

    description: string;

    image: string;

    category: string;

    longitude: string;

    latitude: string;
}

const Home: React.FC = () => {
    // const { setPins } = useContext(ProductContext);

    const { products, setProducts } = useContext(ProductContext);

    // const [products, setProducts] = useState<Product[]>([]);

    const [isModalOpen, setModalOpen] = useState(false);

    const [selectedProductId, setSelectedProductId] = useState<number | null>(
        null
    );

    const handleProductClick = (
        id: number,

        lat: number,

        lng: number,

        address: string
    ) => {
        setSelectedProductId(id);
        setModalOpen(true);

        const pr = products;

        pr.forEach((product) => {
            product.isOpen = product.id === id;

            if (product.isOpen) {
                console.log("isOpen: " + product.id);
            }
        });

        setProducts([...pr]);

        console.log("Öppna produkt med ID:", id);
    };

    const mapContainerStyle = {
        width: "100%",

        height: "100vh",
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
                url = "/ux ikoner/76h/ClothesPin76vh.png76vh.png";

                break;

            case "Övrigt":
                url = "/ux ikoner/76h//OtherPin76vh.png";

                break;
        }

        return url;
    }

    const center = {
        lat: 57.70090604681059,

        lng: 11.974023638297332,
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
            {products.map(
                (product) =>
                    product.isOpen === true && (
                        <FirstModal selectedProductId={selectedProductId} />
                    )
            )}

            <LoadScript googleMapsApiKey="AIzaSyD4PHr_hX_LqK6x9AHG_heaXXrgKNIlDDk">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={12}
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
                                lat: Math.random() * 0.03 + 57.70090604681059,

                                lng: Math.random() * 0.04 + 11.974023638297332,
                            }}
                            data-value={product}
                            onClick={() => {
                                handleProductClick(
                                    product.id,

                                    57.70090604681059,

                                    11.974023638297332,

                                    "Varbergsgatan"
                                );
                            }}
                        ></Marker>
                    ))}
                </GoogleMap>
            </LoadScript>c
        </>
    );
};

export default Home;
