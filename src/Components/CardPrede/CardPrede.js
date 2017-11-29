// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
  /** Card text */
  text: string,
  /** Card date */
  date: string,
  /** Card button title */
  ctaTitle: string
}

class CardPrede extends Component<Props> {
  render() {
    const { imgSrc, title, url, text, date, ctaTitle } = this.props

    return (
      <article className="card-2">
        <Link to={url} className="card-2__thumbnail">
          <img src={imgSrc} alt={title} />
        </Link>
        <div className="card-2__body">
          <div className="card-2__content">
            <div className="card-2__sub-title mb-sm">{date}</div>
            <Link to={url} className="card-2__title mb-sm">
              {title}
            </Link>
            <p className="card-2__text mb-0">
              {text}
            </p>
            <Link to={url} className="btn btn--link btn--bold text-uppercase mt-sm">
              {ctaTitle} <i className="fa fa-caret-right" />
            </Link>
          </div>
        </div>
      </article>
    )
  }
}

export default CardPrede
