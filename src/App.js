import React from "react";
import "./App.css";
import Aboutus from "./Components/Aboutus/Aboutus";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import MainFeatures from "./Components/MainFeatures/MainFeatures";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Usability from "./Components/Usability/Usability";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="product">
      <Info />
      <Aboutus />
      <Product />
      </div>
      <MainFeatures />
      <div className="usability">
        <Usability />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
