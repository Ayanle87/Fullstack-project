import React from 'react';
import './App.css';
import Home from './Home';

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

  return <RouterProvider router={router} />;
}

export default App;
