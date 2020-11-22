import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Band from './pages/Band'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/band/:id' exact component={Band} />
      </Switch>
    </BrowserRouter>
  )
}
