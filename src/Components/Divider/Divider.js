// @flow

import React, { PureComponent } from 'react'
import cx from 'classnames'

type DividerTypeSuit = 'default' | 'dot' | 'dark'

type Props = {
  /** Divider Type - Accept value: 'default', 'dot', 'dark' */
  type: DividerTypeSuit,
  /** Extra class */
  exClass?: string
}

class Divider extends PureComponent<Props> {
  static defaultProps = {
    type: 'default'
  }

  render() {
    const { type, exClass } = this.props

    return (
      <div
        className={cx({
          divider: type === 'default',
          'divider-dot': type === 'dot',
          'divider-dark': type === 'dark',
          [exClass || '']: exClass && exClass.length
        })}
      />
    )
  }
}

export default Divider
