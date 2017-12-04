// @flow

import React, { Component } from 'react'

import CheckoutPageRoutes from 'Routes/CheckoutPageRoutes'
import CheckoutPageStep from './CheckoutPageStep'
import Breadcrumb from 'Components/Breadcrumb'
import { GridContainer } from 'Components/Layouts'

type Props = {
  routes: Array<Object>,
  match: Object,
  location: Object
}

class CheckoutPage extends Component<Props> {
  render() {
    const { routes, match, location, ...rest } = this.props

    return (
      <div>
        <Breadcrumb match={match} />
        <GridContainer exClass="py-xl">
          <CheckoutPageStep location={location} />
          <CheckoutPageRoutes routes={routes} {...rest} />
        </GridContainer>
      </div>
    )
  }
}

export default CheckoutPage
