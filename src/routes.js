import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/products' component={Products} />
      </Switch>
    </BrowserRouter >
  )
}