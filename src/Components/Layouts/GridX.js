// @flow

import React, { PureComponent } from 'react'
import cx from 'classnames'

type Props = {
  /** Child elements */
  children: any,
  /** Remove grid gutter */
  noGutter?: boolean,
  /** Extra class names */
  exClass?: string
}

class GridX extends PureComponent<Props> {
  render() {
    const { noGutter, children, exClass } = this.props

    return (
      <div
        className={cx('grid-x', {
          'grid-padding-x': !noGutter,
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        {children}
      </div>
    )
  }
}

export default GridX
