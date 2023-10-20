import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
