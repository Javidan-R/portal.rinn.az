// Layout.tsx

import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import LoadingComponent from "../components/Loading";

const Layout = () => {
  return (
  <>
   <LoadingComponent />
      
      <div className="container">
        <div className="w-full">
          <Header />
          <main className=""><Outlet /></main>
        </div>
        <Footer />
      </div>
  </>
   
  );
}

export default Layout;
