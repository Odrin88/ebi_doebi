import React from 'react';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Container from './components/Container';

function App() {
  return (
      <div className="App">
      <Router>
          <Switch>
              <Route path="/" component={Header} exact/>
          </Switch>
      </Router>
      <Container/>
      </div>

  );
}

export default App;
