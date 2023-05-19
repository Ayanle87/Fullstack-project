import React from "react";
import ObjectCard from "./components/ObjectCard";

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <ObjectCard />

                <iframe
                    title="Snaazy Maps"
                    style={{ width: "100%", height: "90vh", border: "none" }}
                    src="https://snazzymaps.com/embed/490724"
                ></iframe>
            </div>
        </div>
    );
};

export default Home;
