// @flow

import * as React from 'react'
import { Route } from 'react-router-dom'

type RouteProps = {
  path: string,
  component: any,
  exact?: boolean,
  routes?: Array<{
    path: string,
    component: any
  }>
}

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route: RouteProps) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
)

export default RouteWithSubRoutes
