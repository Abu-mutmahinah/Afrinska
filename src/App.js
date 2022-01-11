import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPage from "./Components/BlogPage/BlogPage";
import React from "react";
import Homepage from "./Components/Homepages/HomePage";
import ContactPage from "./Components/ContactPages/Contactpage";

const App = () => {
  return (
    <Router>
      <div className="container ">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/Blogpage">
            <BlogPage />
          </Route>

          <Route path="/Contactpage">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
