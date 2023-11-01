import React from "react";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyContextProvider from "./context/PropertyContext";

function App() {
  return (
    <PropertyContextProvider>
      <div className="max-w-[1440px] mx-auto bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </PropertyContextProvider>
  );
}

export default App;
