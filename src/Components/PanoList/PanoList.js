// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'

/**
 * Pano List
 * @version 0.1.0
 */

type Props = {
  /** Component data */
  data: Array<{
    bgImage: string,
    title: string,
    subTitle: string,
    text: string,
    ctaUrl: string,
    ctaTitle: string
  }>
}

class PanoList extends Component<Props> {
  render() {
    const { data } = this.props

    return (
      <div className="grid-x">
        {data.map(d => (
          <section
            key={uniqueId('pano-list-')}
            className="bg-gray bg-image py-xl px-lg text-white medium-4 cell"
            style={{ backgroundImage: `url(${d.bgImage})` }}
          >
            <h3 className="text-font-secondary text-small mb-sm">
              {d.subTitle}
            </h3>
            <h2 className="text-uppercase text-large text-thin mb-sm">
              {d.title}
            </h2>
            <p className="mb-lg text-thin text-small">{d.text}</p>
            <Link to={d.ctaUrl} className="btn btn--secondary text-uppercase">
              {d.ctaTitle}
            </Link>
          </section>
        ))}
      </div>
    )
  }
}

export default PanoList
