import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import GadgetCards from './components/GadgetCards';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch("../category.json"),
        children:[
          {
            path:"/",
            element:<GadgetCards></GadgetCards>,
            loader:()=> fetch("../gadgets.json")
          },
          {
            path:"/gadgets/:category",
            element:<GadgetCards></GadgetCards>,
            loader:()=> fetch("../gadgets.json")
          }
        ]
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/Dashboard",
        element:<Dashboard></Dashboard>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
