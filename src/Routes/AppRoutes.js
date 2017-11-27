// @flow

import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'
import RouteWithSubRoutes from './RouteWithSubRoutes'
import HomePage from '../Pages/HomePage'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/features',
    component: HomePage
  },
  {
    path: '/about',
    component: HomePage
  },
]

class AppRoutes extends Component<{}> {
  render() {
    return (
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={uniqueId('app-routes-')} {...route} />
        ))}
      </Switch>
    )
  }
}

export default AppRoutes
