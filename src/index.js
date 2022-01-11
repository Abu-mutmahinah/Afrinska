import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./Components/Homepages/Homepage.css";
import "./Components/BlogPage/Blogpage.css";
import "./Components/ContactPages/Contactpage.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
