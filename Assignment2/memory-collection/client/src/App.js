import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './style/style.css';
import { useState, useEffect } from 'react';

export default function App() {

  const [apiResponse, setApiResponse] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <p className="App-intro">{apiResponse}</p>
      <Router>
        <div>
          <nav>
            <li class="navbar">
              <Link to="/">Home</Link>
            </li>
            <li class="navbar">
              <Link to="/about">About</Link>
            </li>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

