// @flow

import React, { Component } from 'react'
import cx from 'classnames'

import SliderIniManager from './SliderIniManager'

type Props = {
  /** Slider data */
  data: Array<{
    /** Image source */
    imgSrc: string,
    /** Image thumbnail source */
    imgSrcThumbnail: string,
    /** Image description source */
    description: string
  }>
}

class SliderIni extends Component<Props> {
  render() {
    const { data } = this.props

    return (
      <SliderIniManager
        itemsLength={data.length}
        render={({ currentSlide, setCurrentSlide, prev, next }) => (
          <div className="eps">
            <div className="eps__content">
              <img
                data-test="eps-content-img"
                src={data[currentSlide].imgSrc}
                alt={data[currentSlide].description}
              />
              <button className="eps__cta">
                <i className="fa fa-arrows-alt" />
              </button>
            </div>
            <div className="eps__list-thumbnail">
              {data.map((s, index) => (
                <div
                  data-test="eps-thumbnail"
                  key={`sliderini-thumbnail-${index}`}
                  className={cx('eps__thumbnail', {
                    active: currentSlide === index
                  })}
                  onClick={() => {
                    setCurrentSlide(index)
                  }}
                >
                  <img
                    src={s.imgSrcThumbnail}
                    className="eps__thumbnail-img"
                    alt={s.description}
                  />
                </div>
              ))}

              <div className="eps__paginate">
                <button className="eps__paginate-btn" onClick={prev}>
                  <i className="fa fa-angle-up" />
                </button>
                <button className="eps__paginate-btn" onClick={next}>
                  <i className="fa fa-angle-down" />
                </button>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default SliderIni
