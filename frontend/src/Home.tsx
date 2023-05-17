import React from "react";
import CustomNavbar from "./Navbar";

const Home: React.FC = () => {
    return (
        <div>
            <div>
                <iframe
                    title="Snaazy Maps"
                    style={{ width: "100%", height: "700px", border: "none" }}
                    src="https://snazzymaps.com/embed/490724"
                ></iframe>
            </div>

            <div>
                <CustomNavbar />
            </div>
        </div>
    );
};

export default Home;
