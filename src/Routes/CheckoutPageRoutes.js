// @flow

import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'

import RouteWithSubRoutes from './RouteWithSubRoutes'

type Props = {
  routes: Array<Object>
}

class CheckoutPageRoutes extends Component<Props> {
  render() {
    const { routes } = this.props

    console.log(routes)

    return (
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes
            key={uniqueId('checkout-page-routes-')}
            {...route}
          />
        ))}
      </Switch>
    )
  }
}

export default CheckoutPageRoutes
