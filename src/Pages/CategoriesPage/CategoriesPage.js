// @flow

import React, { Component } from 'react'

import Breadcrumb from 'Components/Breadcrumb'
import CategoriesSidebar from './CategoriesSidebar'
import { GridXContainer, Cell } from 'Components/Layouts'

type Props = {
  match: Object
}

class CategoriesPage extends Component<Props> {
  render() {
    const { match } = this.props
    return (
      <div>
        <Breadcrumb match={match} />
        <GridXContainer exClass="py-lg">
          <Cell span="small-3">
            <CategoriesSidebar />
          </Cell>
        </GridXContainer>
      </div>
    )
  }
}

export default CategoriesPage
