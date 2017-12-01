// @flow

import React, { Component } from 'react'
import cx from 'classnames'

type Props = {
  /** Heading title */
  title: string,
  /** Extra class */
  exClass?: string
}

class HeadingChink extends Component<Props> {
  render() {
    const { title, exClass } = this.props

    return (
      <h2
        className={cx('text-uppercase text-large', {
          'mb-0': !exClass,
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        {title}
      </h2>
    )
  }
}

export default HeadingChink
