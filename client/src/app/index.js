import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { About, Home } from '../pages'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/cards/home" exact component={Home} />
                <Route path="/cards/about" exact component={About} />
            </Switch>
        </Router>
    )
}
