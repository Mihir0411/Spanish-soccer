import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ClubDetail from "./Component/ClubDetail/ClubDetail";
import Home from "./Component/Home/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/detail/:idTeam">
              <ClubDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
