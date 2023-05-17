import React from "react";
import CustomNavbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <iframe
          title="Snaazy Maps"
          style={{ width: "100%", height: "90vh", border: "none" }}
          src={`https://snazzymaps.com/embed/490724?styles=[{"feature":"poi.business","stylers":[{"visibility":"off"}]}]&key="AIzaSyD4PHr_hX_LqK6x9AHG_heaXXrgKNIlDDk"`}
        ></iframe>
      </div>
      <div>
        <CustomNavbar />
      </div>
    </div>
  );
};

export default Home;
