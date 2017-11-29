// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/**
 * Card Seel
 * @version 0.1.0
 */

type Props = {
  /** Image source */
  imgSrc: string,
  /** Card title & image alt text */
  title: string,
  /** Card link href */
  url: string,
  /** Card category's link href */
  catUrl: string,
  /** Category name */
  catName: string,
  /** Product price */
  price: string
}

class CardSeel extends Component<Props> {
  render() {
    const { imgSrc, title, url, catUrl, catName, price } = this.props

    return (
      <article className="card">
        <Link to={url} className="card__thumbnail">
          <img src={imgSrc} alt={title} />
          <div className="card__thumbnail-addon">Quick View</div>
        </Link>
        <div className="card__content">
          <Link to={url} className="card__title mt-md">
            {title}
          </Link>
          <Link to={catUrl} className="card__sub-title mt-sm">
            {catName}
          </Link>
          <div className="my-sm">
            <div className="card__hover-hide text-bold text-large">{price}</div>
            <div className="card__hover-show">
              <button className="btn btn--primary text-uppercase">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default CardSeel
