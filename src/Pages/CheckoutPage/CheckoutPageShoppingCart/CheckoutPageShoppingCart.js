// @flow

import React, { Component, Fragment } from 'react'

import ShoppingCartTable from './ShoppingCartTable'
import ShoppingCartForm from './ShoppingCartForm'

class CheckoutPageShoppingCart extends Component<{}> {
  render() {
    return (
      <Fragment>
        <ShoppingCartTable />
        <ShoppingCartForm />
      </Fragment>
    )
  }
}

export default CheckoutPageShoppingCart
