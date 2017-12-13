// @flow

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import startsWith from 'lodash/startsWith'

import store from './Redux'
import AppRoutes from './Routes/AppRoutes'
import AdminRoutes from './Routes/AdminRoutes'

class App extends Component<{}> {
  render() {
    const isAdminRoute = startsWith(window.location.href, '/admin')

    return (
      <Provider store={store}>
        <Router>
          {isAdminRoute ? (
            <Route component={AdminRoutes} />
          ) : (
            <Route component={AppRoutes} />
          )}
        </Router>
      </Provider>
    )
  }
}

export default App
