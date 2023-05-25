
import ObjectCard from "./components/ObjectCard";
// import axios from "axios";

import React, { useState, useEffect } from "react";

import "./Home.css";
import styled from "styled-components";



const Home: React.FC = () => {
  navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords.latitude), (err:any) => console.log("err: " + err))
    return (
      <>
        <div>
            <div>
                <div className="map-container">
                    <iframe
                        title="Snaazy Maps"
                        className="map-iframe"
                       src="https://snazzymaps.com/embed/490724"


                    ></iframe>
                </div>
                <div className="map-container2">
                    <iframe
                        title="Snaazy Maps"
                        className="map-iframe"
                      //  src="https://snazzymaps.com/embed/490724"
                       src="https://snazzymaps.com/embed/490724"
                   ></iframe>
                </div>
            </div>
        </div>
        <script src="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD4PHr_hX_LqK6x9AHG_heaXXrgKNIlDDk"></script>
      </>
    );
};

export default Home;
