// @flow

import React, { PureComponent } from 'react'
import cx from 'classnames'

type Props = {
  /** Child elements */
  children: any,
  /** Extra class names */
  exClass?: string
}

class GridContainer extends PureComponent<Props> {
  render() {
    const { exClass, children } = this.props
    return (
      <div
        className={cx('grid-container', {
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        {children}
      </div>
    )
  }
}

export default GridContainer
