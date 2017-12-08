// @flow

import React, { Component, Fragment } from 'react'

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
    const { routes, location, ...rest } = this.props

    return (
      <Fragment>
        <Breadcrumb pathname={location.pathname} />
        <GridContainer exClass="py-xl">
          <CheckoutPageStep location={location} />
          <CheckoutPageRoutes routes={routes} {...rest} />
        </GridContainer>
      </Fragment>
    )
  }
}

export default CheckoutPage
