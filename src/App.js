import './App.css';
import {Switch, Route} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Events,
  PageNotFound
} from "./Pages"



  function App() {
    return (
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <PageNotFound/>
          </Route>

        </Switch>
      </div>
    );
  }

export default App;
