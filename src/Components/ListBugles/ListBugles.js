// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'
import cx from 'classnames'

type Props = {
  /** List data */
  data: Array<{
    url: string,
    title: string
  }>,
  /** Extra class names */
  exClass?: string
}

class ListBugles extends Component<Props> {
  render() {
    const { data, exClass } = this.props

    return (
      <ul
        className={cx('list-underline text-small', {
          [exClass || '']: exClass && exClass.length > 0
        })}
      >
        {data.map(d => (
          <li key={uniqueId('list-bugles-')}>
            <Link to={d.url} className="text-muted">
              <i className="fa fa-circle text-secondary" /> {d.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListBugles
