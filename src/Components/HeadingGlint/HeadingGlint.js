// @flow

import React, { Component } from 'react'
import cx from 'classnames'

/**
 * HeadingGlint
 * @version 0.1.0
 */

type Props = {
  /** Heading title */
  title: string,
  /** Extra class names */
  exClass?: string
}

class HeadingGlint extends Component<Props> {
  render() {
    const { title, exClass } = this.props

    return (
      <div
        className={cx('sh-3', {
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        <h2 className="sh-3__title">{title}</h2>
      </div>
    )
  }
}

export default HeadingGlint
