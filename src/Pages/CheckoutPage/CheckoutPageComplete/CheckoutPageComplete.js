// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { GridX, Cell } from 'Components/Layouts'

class CheckoutPageComplete extends Component<{}> {
  render() {
    return (
      <GridX exClass="mt-xl">
        <Cell span="large-12">
          <div className="text-center">
            <figure className="mb-lg">
              <img src="https://unsplash.it/600/450" alt="Thank you" />
            </figure>
            <h2 className="text-uppercase text-size-h3 mb-xs">
              Your order is complete
            </h2>
            <h3 className="text-uppercase text-thin text-muted mb-lg text-large mb-md">
              Thank you for shopping with us
            </h3>
            <Link to="/" className="btn btn--bordered mr-sm">
              Homepage
            </Link>
            <Link to="/men" className="btn btn--secondary">
              Continue shopping
            </Link>
          </div>
        </Cell>
      </GridX>
    )
  }
}

export default CheckoutPageComplete
