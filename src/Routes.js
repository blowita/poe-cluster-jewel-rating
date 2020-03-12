import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import IndexPage from './IndexPage'
import RatePage from './RatePage'
import TiersPage from './TiersPage'

export default function Routes() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/rate" component={RatePage} />
        <Route exact path="/tiers" component={TiersPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </HashRouter>
  )
}
