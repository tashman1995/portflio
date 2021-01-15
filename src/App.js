import { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./Style/main.scss";
import Cursor from "./components/Cursor";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log('rerender')
  return (
    <Fragment>
      <Cursor />
      <Router>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
