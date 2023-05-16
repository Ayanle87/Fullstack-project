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


const Root: React.FC = () => {
  return (
    <div className="App">
      <CustomNavbar />
    </div>
  );
}


const App: React.FC = () => {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
            ],
         },
  ]);

  return <RouterProvider router={router} />;


}

export default App;
