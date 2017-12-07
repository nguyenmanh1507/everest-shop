// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { startCase, trimStart, split, uniqueId } from 'lodash'

import { GridContainer } from 'Components/Layouts'

type Props = {
  pathname: string
}

class Breadcrumb extends Component<Props> {
  render() {
    const { pathname } = this.props

    const newUrl = split(trimStart(pathname, '/'), '/')
    let breadcrumbUrl = ''

    return (
      <div className="bg-gray py-sm">
        <GridContainer exClass="cell">
          <div className="d-flex align-items-center">
            <Link
              to="/"
              className="text-muted mr-sm"
              data-test="bc-homepage-link"
            >
              <i className="fa fa-home" />
            </Link>
            {newUrl.map((u, index) => {
              if (index + 1 === newUrl.length) {
                return [
                  <i
                    className="fa fa-caret-right text-muted mr-sm"
                    key={uniqueId('breadcrumb-')}
                  />,
                  <span
                    className="text-small text-muted"
                    key={uniqueId('breadcrumb-')}
                    data-test="bc-item"
                  >
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
                  data-test="bc-item"
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
