// @flow

import React, { PureComponent } from 'react'
import cx from 'classnames'

type Props = {
  currentIndex: number,
  index: number,
  goTo: (index: number) => void,
  text: string
}

class HeroCarouselPaginate extends PureComponent<Props> {
  render() {
    const { currentIndex, index, goTo, text } = this.props

    return (
      <button
        className={cx('carousel__paginate-item', {
          active: index === currentIndex
        })}
        onClick={() => {
          goTo(index)
        }}
        data-test="carousel-paginate"
      >
        <span className="text-hide">{text}</span>
      </button>
    )
  }
}

export default HeroCarouselPaginate
