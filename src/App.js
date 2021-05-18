import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./helpers/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  const history = useHistory();
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <button
            OnClick={() => {
              localStorage.removeItem("token");
              history.push("/login");
            }}
          >
            {" "}
            logout{" "}
          </button>
        </header>
        <PrivateRoute path="/colors" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
