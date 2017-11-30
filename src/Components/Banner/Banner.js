// @flow

import React, { PureComponent } from 'react'

type Props = {
  /** Component background image */
  bgImage: string,
  /** Component title */
  title: string,
  /** Component sub title */
  subTitle: string
}

class Banner extends PureComponent<Props> {
  render() {
    const { bgImage, title, subTitle } = this.props

    return (
      <section
        className="banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="banner__body">
          <h3 className="banner__sub-title">{subTitle}</h3>
          <h2 className="banner__title">{title}</h2>
        </div>
      </section>
    )
  }
}

export default Banner
