// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/**
 * Pano
 * @version 0.1.0
 */

type Props = {
  /** Component background image */
  bgImage: string,
  /** Component title */
  title: string,
  /** Component sub title */
  subTitle: string,
  /** CTA button url */
  ctaUrl: string,
  /** CTA title */
  ctaTitle: string
}

class Pano extends Component<Props> {
  render() {
    const { bgImage, title, subTitle, ctaUrl, ctaTitle } = this.props

    return (
      <section
        className="bg-gray bg-image text-center py-xxl"
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
        <h3 className="text-font-secondary text-size-h3 mb-md">{title}</h3>
        <h2 className="text-uppercase text-size-h1 mb-lg">{subTitle}</h2>
        <Link
          to={ctaUrl}
          className="btn btn--secondary btn--rounded btn--large text-uppercase"
        >
          {ctaTitle}
        </Link>
      </section>
    )
  }
}

export default Pano
