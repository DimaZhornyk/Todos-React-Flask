import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/404Component";
import Login from "./components/LoginPage";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login}/>
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
