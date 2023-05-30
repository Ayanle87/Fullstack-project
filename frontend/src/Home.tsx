import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ContactSeller from "./ContactSeller";
import ObjectCard from "./components/ObjectCard";
import Modal from "react-modal";
import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
// import "./Home.css";
import SmallModal from "./components/SmallModal";
import { ProductContext } from "./ProductContext";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

const Home: React.FC = () => {
    // const { setPins } = useContext(ProductContext);

    const { products, setProducts } = useContext(ProductContext);
    // const [products, setProducts] = useState<Product[]>([]);

    const handleProductClick = (
        id: number,
        lat: number,
        lng: number,
        address: string
    ) => {
        console.log("Öppna produkt med ID:", id);
    };

    const mapContainerStyle = {
        width: "100%",
        height: "50vh",
    };

    function getIcon(category: string) {
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
                url = "/ux ikoner/76h/ClothesPinVisited76vh.png76vh.png";
                break;
            case "Övrigt":
                url = "/ux ikoner/76h//OtherPinVisited76vh.png";
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
                {/* {products.map((product) => (
          <ObjectCard
          key={product.id}
           product={product}
           onProductClick={handleProductClick}

          />
        ))} */}

                {/* "Fordon" ? "/ux ikoner/76h/ElectronicsPin76vh.png" : "/ux ikoner/76h/VehiclePin76vh.png" */}
                {products.map((product) => (
                    <Marker
                        icon={getIcon(product.category)}
                        // icon={(product:Product) => {return getIcon(product.category)}}
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
                    >
                        <div>
                            <SmallModal products={products} />
                        </div>
                        {/* {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.address}</h3>
                </InfoWindow>
              )} */}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Home;
