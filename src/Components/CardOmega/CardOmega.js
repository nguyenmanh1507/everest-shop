// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

/**
 * Card Prede
 * @version 0.1.0
 */

type Props = {
  /** Image source */
  imgSrc: string,
  /** Card title & image alt text */
  title: string,
  /** Card link href */
  url: string,
  /** Product rating */
  rating?: number,
  /** Product price */
  price: string,
  /** Extra class names */
  exClass?: string
}

class CardOmega extends Component<Props> {
  render() {
    const { imgSrc, title, url, price, rating, exClass } = this.props

    return (
      <Link
        to={url}
        className={cx('d-flex', {
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        <div className="mr-md item-no-shrink">
          <img src={imgSrc} alt={title} />
        </div>
        <div>
          <h3 className="text-size-base text-thin m-0">{title}</h3>
          <div className="text-muted">
            <i
              className={cx('fa fa-star', {
                'text-secondary': rating && rating >= 1
              })}
            />
            <i
              className={cx('fa fa-star', {
                'text-secondary': rating && rating >= 2
              })}
            />
            <i
              className={cx('fa fa-star', {
                'text-secondary': rating && rating >= 3
              })}
            />
            <i
              className={cx('fa fa-star', {
                'text-secondary': rating && rating >= 4
              })}
            />
            <i
              className={cx('fa fa-star', {
                'text-secondary': rating && rating === 5
              })}
            />
          </div>
          <div className="text-large text-bold">{price}</div>
        </div>
      </Link>
    )
  }
}

export default CardOmega
