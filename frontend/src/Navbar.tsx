import React from 'react';
import { Button } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
  return (
    <div className="navbar">
      <Button variant="link" className="text-decoration-none left-button">Logga in</Button>
      <div className="right-buttons">
        <Button variant="link" className="text-decoration-none button">Om</Button>
        <Button variant="link" className="text-decoration-none button">Kontakt</Button>
      </div>
    </div>
  );
}

export default CustomNavbar;
