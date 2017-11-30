// @flow

import React, { Component } from 'react'

import Breadcrumb from 'Components/Breadcrumb'
import CategoriesPageSidebar from './CategoriesPageSidebar'
import { GridXContainer, Cell } from 'Components/Layouts'
import Banner from 'Components/Banner'
import CategoriesPageFilter from './CategoriesPageFilter'
import CategoriesPageProductList from './CategoriesPageProductList'

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
            <CategoriesPageSidebar />
          </Cell>
          <Cell span="small-9">
            <Banner
              title="Flowe desk"
              subTitle="Inspiration"
              bgImage="https://unsplash.it/800/450?image=230"
              exClass="mb-md"
            />
            <CategoriesPageFilter />
            <CategoriesPageProductList />
          </Cell>
        </GridXContainer>
      </div>
    )
  }
}

export default CategoriesPage
