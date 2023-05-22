import React, { useState, useEffect } from "react";
import ObjectCard from "./components/ObjectCard";
import axios from "axios";

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <ObjectCard id={1} />

                <iframe
                    title="Snaazy Maps"
                    style={{ width: "100%", height: "90vh", border: "none" }}
                    src={`https://snazzymaps.com/embed/490724?styles=[{"feature":"poi.business","stylers":[{"visibility":"off"}]}]&key="AIzaSyD4PHr_hX_LqK6x9AHG_heaXXrgKNIlDDk"`}
                ></iframe>
            </div>
        </div>
    );
};

export default Home;
