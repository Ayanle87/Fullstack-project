import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { RiMenu3Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-toggle">
        <Button variant="link" onClick={toggleNavbar}>
          {isOpen ? <FiX /> : <RiMenu3Line />}
        </Button>
      </div>
      <Collapse in={isOpen}>
        <div className="mobile-menu">
          <Button variant="link" className="text-decoration-none button">
            Logga in
          </Button>
          <Button variant="link" className="text-decoration-none button">
            Om
          </Button>
          <Button variant="link" className="text-decoration-none button">
            Kontakt
          </Button>
        </div>
      </Collapse>
    </>
  );
};

export default MobileNavbar;
