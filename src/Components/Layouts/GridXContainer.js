// @flow

import React, { PureComponent } from 'react'

import GridContainer from './GridContainer'
import GridX from './GridX'

type Props = {
  /** Child elements */
  children: any,
  /** Remove grid gutter */
  noGutter?: boolean
}

class GridXContainer extends PureComponent<Props> {
  render() {
    const { noGutter, children } = this.props

    return (
      <GridContainer>
        <GridX noGutter={noGutter}>{children}</GridX>
      </GridContainer>
    )
  }
}

export default GridXContainer
