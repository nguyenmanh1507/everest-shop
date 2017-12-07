// @flow

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import CheckoutPageShoppingCart from 'Pages/CheckoutPage/CheckoutPageShoppingCart'
import CheckoutPagePayment from 'Pages/CheckoutPage/CheckoutPagePayment'
import CheckoutPageComplete from 'Pages/CheckoutPage/CheckoutPageComplete'

type Props = {
  routes: Array<Object>
}

class CheckoutPageRoutes extends Component<Props> {
  render() {
    return (
      <Switch>
        <Route
          path="/checkout/shopping-cart"
          component={CheckoutPageShoppingCart}
        />
        <Route path="/checkout/payment" component={CheckoutPagePayment} />
        <Route path="/checkout/complete" component={CheckoutPageComplete} />
      </Switch>
    )
  }
}

export default CheckoutPageRoutes
