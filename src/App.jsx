import React from "react";
import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";

function App(){
  return (
    <div className="app">
       <Navbar />
       <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> 



       <Footer />

    </div>
  );
}
export default App;
