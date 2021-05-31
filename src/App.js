import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
