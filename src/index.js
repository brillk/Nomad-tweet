import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import App from "./components/App.js";

console.log(firebase);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
