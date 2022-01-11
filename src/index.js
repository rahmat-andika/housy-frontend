import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./_store";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";
import History from "./pages/History";
import Detail from "./pages/Detail";

import Owner from "./owner/Home";
import AddProperty from "./owner/AddProperty";
import AdminHistory from "./owner/History";
import AdminProfile from "./owner/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";  
import "./assets/scss/main.scss";

import * as serviceWorker from "./serviceWorker";

const stats = localStorage.getItem("role");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container margin-top">
        {stats === "owner" ? (
          <>
            <Route exact path="/" component={Owner} />
            <Route exact path="/profile" component={AdminProfile} />
            <Route exact path="/profile/add" component={AddProperty} />
            <Route exact path="/profile/history" component={AdminHistory} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/history" component={History} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/booking/:id" component={Booking} />
          </>
        )}
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister(); 