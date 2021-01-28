import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Navbar from './components/Navbar'
// import Navbar from "./components/";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>{" "}
        <Route exact path="/services">
          <Services />
        </Route>{" "}
        <Route exact path="/products">
          <Products />
        </Route>{" "}
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
