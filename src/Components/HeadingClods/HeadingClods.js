// @flow

import React, { Component } from 'react'

/**
 * HeadingClods
 * @version 0.1.0
 */

type Props = {
  /** Heading title */
  title: string
}

class HeadingClods extends Component<Props> {
  render() {
    const { title } = this.props

    return (
      <div className="sh">
        <h2 className="sh__title">{title}</h2>
      </div>
    )
  }
}

export default HeadingClods
