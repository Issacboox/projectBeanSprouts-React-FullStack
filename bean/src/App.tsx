// import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
}
  from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import your custom styles
import Sidebar from './component/sidebar/sidebar.tsx';
import MobileSidebar from './component/sidebar/sidebar_mobile.tsx';
import Home from './component/pages/Dashboard.tsx';
import Store from './component/pages/Store.tsx';
import Check from './component/pages/Check';
import History from './component/pages/History';
import Report from './component/pages/Report';
import Setting from './component/pages/Setting';
import Error from './component/pages/Errors';
import Navbar from './component/sidebar/navbar';
import { ShoppingCartProvider } from './component/context/shoppingCartContext.tsx';
// import Quotes from 'src/Quotes.tsx';

const Dashboard = () => {
  return (
    <div>
      <ShoppingCartProvider>
        <Sidebar />
        <Navbar />
        <Outlet />
        <MobileSidebar />
      </ShoppingCartProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Store',
        element: <Store />,
      },
      {
        path: '/Check',
        element: <Check />,
      },
      {
        path: '/History',
        element: <History />,
      },
      {
        path: '/Setting',
        element: <Setting />,
      },
      {
        path: '/Report',
        element: <Report />,
      },
      {
        path: '*',
        element: <Error />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
