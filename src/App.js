import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productid" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
