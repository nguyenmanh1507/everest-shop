// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/**
 * Card Trama
 * @version 0.1.0
 */

type Props = {
  /** Image source */
  imgSrc: string,
  /** Card title & image alt text */
  title: string,
  /** Card link href */
  url: string
}

class CardTrama extends Component<Props> {
  render() {
    const { imgSrc, title, url } = this.props

    return (
      <article className="card">
        <Link to={url} className="card__thumbnail hover">
          <img src={imgSrc} alt={title} />
          <div className="card__thumbnail-addon card__thumbnail-addon--2">
            {title}
          </div>
        </Link>
      </article>
    )
  }
}

export default CardTrama
