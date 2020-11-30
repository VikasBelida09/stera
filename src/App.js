import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Aboutus from "./Components/Aboutus/Aboutus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Knowmore from "./Components/knowmore/knowmore";
import MainFeatures from "./Components/MainFeatures/MainFeatures";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Usability from "./Components/Usability/Usability";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <>
              <Navbar>
                <div className="product">
                  <Info />
                  <Aboutus />
                  <Product />
                </div>
              </Navbar>
              <MainFeatures />
              <div className="usability">
                <Usability />
              </div>
              <div className="footer">
                <Footer />
              </div>
            </>
          </Route>
          <Route path="/knowMore" exact>
            <Knowmore />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/faq" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
