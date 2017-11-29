// @flow

import React, { PureComponent } from 'react'
import cx from 'classnames'

type Props = {
  /** Child elements */
  children: any,
  /** Cell class names that specify how many column cell has */
  span: string,
  /** Extra class names */
  exClass?: string
}

class Cell extends PureComponent<Props> {
  render() {
    const { span, exClass, children } = this.props

    return (
      <div
        className={cx('cell', {
          [span]: span,
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        {children}
      </div>
    )
  }
}

export default Cell
