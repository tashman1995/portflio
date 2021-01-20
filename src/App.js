import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import "./Style/main.scss";
import Cursor from "./components/Cursor";

function App() {
  return (
    <Fragment>
      <Cursor />
      <Home />
    </Fragment>
  );
}

export default App;
