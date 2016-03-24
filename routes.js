import React from 'react'
import { Route } from 'react-router'
import Init from './containers/Init'
import Session from './containers/Session'
import Dashboard from './containers/Dashboard'
import Foo from './containers/Foo'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const  history = createBrowserHistory()

export default (
  <Route path="/" component={Init}>
    <Route component={Session}>
      <Route path="dashboard" component={Dashboard} />
    </Route>
  </Route>
)
