import Router from "preact-router";
import Home from "./home";
import Notfound from "./notfound";
import Items from "./items";

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Items path="/items/:id" />
      <Notfound default />
    </Router>
  );
};

export default Routes;
