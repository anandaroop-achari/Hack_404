import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
//import League from './components/League'
import Home from './components/Home'
//import Game from './components/Games'
import Profile from './components/Profile'
module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/profile" component={Profile} />
  </Route>
)
