import React from 'react';
import './App.css';
import CustomNavbar from './Navbar';
import './navbar.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <iframe
        title="Snaazy Maps"
        style={{ width: "100%", height: "700px", border: "none" }}
        src="https://snazzymaps.com/embed/490724"
      ></iframe>
      <CustomNavbar />
    </div>
  );
}

export default App;
