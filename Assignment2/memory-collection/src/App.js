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

export default function App() {
  return (
    <div>
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

