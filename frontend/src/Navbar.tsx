import React from "react";
import { Button } from "react-bootstrap";

const CustomNavbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="left-buttons">
        <Button variant="link" className="text-decoration-none left-button">
          Logga in
        </Button>
      </div>
      <div className="right-buttons">
        <Button variant="link" className="text-decoration-none button">
          Om
        </Button>
        <Button variant="link" className="text-decoration-none button">
          Kontakt
        </Button>
      </div>
    </nav>
  );
};

export default CustomNavbar;
