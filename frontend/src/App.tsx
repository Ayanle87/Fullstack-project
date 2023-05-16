import React from 'react';
import './App.css';
import Home from './Home';
import CustomNavbar from './Navbar';
import './navbar.css';

import {
  createHashRouter,
    // Link,
  // Outlet,
  RouterProvider,
} from "react-router-dom";

const App: React.FC = () => {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
      ],
    },
  ]);

  return (
    <div className="App">
      <CustomNavbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
