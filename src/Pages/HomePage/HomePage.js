// @flow

import React, { Component } from 'react'

import { GridContainer } from 'Components/Layouts'
import HomePageHero from './HomePageHero'
import HomePageCollection from './HomePageCollection'
import HomePageNewArrivals from './HomePageNewArrivals'
import HomePagePano from './HomePagePano'
import HomePagePopularProducts from './HomePagePopularProducts'
import HomePageCollectionList from './HomePageCollectionList'
import HomePageBlogList from './HomePageBlogList'

class HomePage extends Component<{}> {
  render() {
    return (
      <div>
        <HomePageHero />
        <GridContainer exClass="py-xl">
          <HomePageCollection />
          <HomePageNewArrivals />
        </GridContainer>
        <HomePagePano />
        <GridContainer exClass="py-xl">
          <HomePagePopularProducts />
        </GridContainer>
        <HomePageCollectionList />
        <HomePageBlogList />
      </div>
    )
  }
}

export default HomePage
