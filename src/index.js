import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")

);

document.body.className ="parent";
