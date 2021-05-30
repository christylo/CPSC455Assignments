import logo from './logo.svg';
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
      <meta charset="utf-8" />
      <title>Home - Memory Collection</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/png" href="https://webstockreview.net/images/daisies-clipart-real-4.png" />
      <link rel="stylesheet" href="../style/style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        rel="stylesheet"
      />
      <Router>
        <div>
          <nav>
            <li class="navbar">
              <Link to="/" class="active">Home</Link>
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

