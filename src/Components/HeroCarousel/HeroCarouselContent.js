// @flow

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { ContentProps } from './HeroCarouselTypes'

class HeroCarouselContent extends PureComponent<ContentProps> {
  render() {
    const { c } = this.props

    return (
      <section className="hero" data-test="carousel-content">
        <div
          className="hero__item"
          style={{
            backgroundImage: `url(${c.bgImage})`
          }}
        >
          <div className="hero__content text-center">
            <h2 className="hero__title mb-xs">{c.title}</h2>
            <h3 className="hero__sub-title mb-md">{c.subTitle}</h3>
            <Link
              to={c.ctaUrl}
              className="btn btn--rounded btn--secondary btn--large text-uppercase"
            >
              {c.ctaText}
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroCarouselContent
