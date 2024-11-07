import React, { } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SideNav from './components/SideNav';

// import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  // return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="control" element={<Control />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  // );
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <SideNav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
