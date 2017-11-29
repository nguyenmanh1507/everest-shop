// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { startCase, trimStart, split, uniqueId } from 'lodash'

import { GridContainer } from 'Components/Layouts'

type Props = {
  match: {
    url: string
  }
}

class Breadcrumb extends Component<Props> {
  render() {
    const { match: { url } } = this.props

    const newUrl = split(trimStart(url, '/'), '/')
    let breadcrumbUrl = ''

    return (
      <div className="bg-gray py-sm">
        <GridContainer exClass="cell">
          <div className="d-flex align-items-center">
            <Link to="/" className="text-muted mr-sm">
              <i className="fa fa-home" />
            </Link>
            {newUrl.map((u, index) => {
              if (index + 1 === newUrl.length) {
                return [
                  <i
                    className="fa fa-caret-right text-muted mr-sm"
                    key={uniqueId('breadcrumb-')}
                  />,
                  <span className="text-small text-muted" key={uniqueId('breadcrumb-')}>
                    {startCase(u)}
                  </span>
                ]
              }

              breadcrumbUrl += `/${u}`

              return [
                <i
                  className="fa fa-caret-right text-muted mr-sm"
                  key={uniqueId('breadcrumb-')}
                />,
                <Link
                  to={breadcrumbUrl}
                  className="text-small mr-sm"
                  key={uniqueId('breadcrumb-')}
                >
                  {startCase(u)}
                </Link>
              ]
            })}
          </div>
        </GridContainer>
      </div>
    )
  }
}

export default Breadcrumb
