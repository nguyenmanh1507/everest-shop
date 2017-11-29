// @flow

import React, { PureComponent } from 'react'

import GridContainer from './GridContainer'
import GridX from './GridX'

type Props = {
  /** Child elements */
  children: any,
  /** Remove grid gutter */
  noGutter?: boolean,
  /** Extra class names */
  exClass?: string
}

class GridXContainer extends PureComponent<Props> {
  render() {
    const { noGutter, children, exClass } = this.props

    return (
      <GridContainer exClass={exClass}>
        <GridX noGutter={noGutter}>{children}</GridX>
      </GridContainer>
    )
  }
}

export default GridXContainer
