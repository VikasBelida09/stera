import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import MainFeatures from "./Components/MainFeatures/MainFeatures";
import Navbar from "./Components/Navbar/Navbar";
import Usability from "./Components/Usability/Usability";
function App() {
  return (
    <div className="App">
      <Navbar />
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
