
import ObjectCard from "./components/ObjectCard";
// import axios from "axios";

import React, { useState, useEffect } from "react";

import "./Home.css";
import styled from "styled-components";

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <div className="map-container">
                    <iframe
                        title="Snaazy Maps"
                        className="map-iframe"
                       src="https://snazzymaps.com/embed/490724"

                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Home;
