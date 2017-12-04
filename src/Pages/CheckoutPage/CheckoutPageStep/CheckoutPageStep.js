// @flow

import React, { Component } from 'react'
import last from 'lodash/last'

import StepIndicator from 'Components/StepIndicator'
import { GridX, Cell } from 'Components/Layouts'

const steps = ['Shopping Cart', 'Payment', 'Order Complete']

type Props = {
  location: Object
}

type State = {
  step: number
}

// Step done style depend on url
const stepNumbers = {
  'shopping-cart': 1,
  payment: 2,
  complete: 3
}

class CheckoutPageStep extends Component<Props, State> {
  render() {
    const { location: { pathname } } = this.props
    const checkoutStepUrl = last(pathname.split('/'))

    return (
      <GridX>
        <Cell span="large-10 large-offset-1">
          <StepIndicator
            steps={steps}
            currentStep={stepNumbers[checkoutStepUrl]}
          />
        </Cell>
      </GridX>
    )
  }
}

export default CheckoutPageStep
