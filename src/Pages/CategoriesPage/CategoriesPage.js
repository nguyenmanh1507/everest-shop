// @flow

import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Breadcrumb from 'Components/Breadcrumb'
import CategoriesPageSidebar from './CategoriesPageSidebar'
import { GridXContainer, Cell } from 'Components/Layouts'
import Banner from 'Components/Banner'
import CategoriesPageFilter from './CategoriesPageFilter'
import CategoriesPageProductList from './CategoriesPageProductList'
import CategoriesPageProductListByGender from './CategoriesPageProductListByGender'
import CategoriesPageProductListByCategory from './CategoriesPageProductListByCategory'
import CategoriesPageProductListByKind from './CategoriesPageProductListByKind'

type Props = {
  location: Object
}

class CategoriesPage extends Component<Props> {
  render() {
    const { location } = this.props
    return (
      <Fragment>
        <Breadcrumb pathname={location.pathname} />
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

            <Switch>
              <Route
                path="/categories/:genderSlug"
                component={CategoriesPageProductListByGender}
                exact={true}
              />
              <Route
                path="/categories/:genderSlug/:catSlug"
                component={CategoriesPageProductListByCategory}
                exact={true}
              />
              <Route
                path="/categories/:genderSlug/:catSlug/:productKindSlug"
                component={CategoriesPageProductListByKind}
                exact={true}
              />
              <Route component={CategoriesPageProductList} />
            </Switch>
          </Cell>
        </GridXContainer>
      </Fragment>
    )
  }
}

export default CategoriesPage
