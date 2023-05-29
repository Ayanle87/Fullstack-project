import React, {useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ContactSeller from './ContactSeller';
import ObjectCard from "./components/ObjectCard";
import Modal from "react-modal";
import axios from "axios";
import styled from "styled-components";
 // import "./Home.css";

 interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}


 const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    axios.get('http://localhost:8080/').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleProductClick = (id:number, lat:number, lng:number, address:string) => {

    console.log('Öppna produkt med ID:', id);
  };

   const mapContainerStyle = {
    width: '100%',
    height: '50vh'
  };



  const center = {
    lat: 57.70090604681059,
    lng: 11.974023638297332
  };

  const yourMapStyle = [
    {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#878787'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#fbf5e9'
        },
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          color: '#f5f5f5'
        },
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c9c9c9'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#aee0f4'
        }
      ]
    }
  ];

  const mapOptions = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyD4PHr_hX_LqK6x9AHG_heaXXrgKNIlDDk">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        options={{
          styles: yourMapStyle,
          ...mapOptions
        }}
      >
         {/* {products.map((product) => (
          <ObjectCard
          key={product.id}
           product={product}
           onProductClick={handleProductClick}

          />
        ))} */}

{/* För varje Marker, ska den ha egen modal, vilket blir objectcard på något sätt se nedan för Infowindow examplet*/}
         {products.map((product) => (
      <Marker
    key={product.id}
    position = { { lat: Math.random () * 0.1+57.70090604681059,
      lng: Math.random() * 0.1+11.974023638297332}}
      data-value = {product}
      //  onClick={handleProductClick}
      onClick={() => {
        handleProductClick(product.id, 57.70090604681059, 11.974023638297332, "Varbergsgatan");
      }}


 >
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
