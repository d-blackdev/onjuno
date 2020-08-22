import React from "react";
import "./css/main.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homePage";
import NavBar from "./components/NavBar";
import Footer from "./pages/footer";
import Company from "./pages/company";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/company" component={Company} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
