import React from 'react';
import './App.css';
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <iframe
        title="Snaazy Maps"
        style={{ width: "100%", height: "700px", border: "none" }}
        src="https://snazzymaps.com/embed/490724"
      ></iframe>
      <Navbar /> {/* Include Navbar component */}
    </div>
  );
}

export default App;
