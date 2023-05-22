import React from "react";
import ObjectCard from "./components/ObjectCard";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <ObjectCard />
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
