// @flow

import React, { PureComponent } from 'react'

import HeroCarouselManager from './HeroCarouselManager'
import HeroCarouselContent from './HeroCarouselContent'
import HeroCarouselPaginate from './HeroCarouselPaginate'
import { ContentProps } from './HeroCarouselTypes'

type Props = {
  data: Array<ContentProps>
}

class HeroCarousel extends PureComponent<Props> {
  render() {
    const { data } = this.props

    return (
      <HeroCarouselManager
        render={({ carouselRef, prev, next, goTo, currentIndex }) => (
          <div className="carousel">
            <div ref={carouselRef} data-test="carousel-ref">
              {data.map((c, index) => (
                <HeroCarouselContent c={c} key={`hero-carousel-${index}`} />
              ))}
            </div>

            <button
              className="carousel__arrow carousel__arrow--left"
              onClick={prev}
            >
              <i className="fa fa-angle-left" />
            </button>
            <button
              className="carousel__arrow carousel__arrow--right"
              onClick={next}
            >
              <i className="fa fa-angle-right" />
            </button>

            <div className="carousel__paginate">
              {data.map((c, index) => (
                <HeroCarouselPaginate
                  index={index}
                  currentIndex={currentIndex}
                  text={c.title}
                  goTo={goTo}
                  key={`carousel-paginate-${index}`}
                />
              ))}
            </div>
          </div>
        )}
      />
    )
  }
}

export default HeroCarousel
