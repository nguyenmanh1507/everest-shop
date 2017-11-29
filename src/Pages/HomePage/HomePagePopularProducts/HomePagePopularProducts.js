// @flow

import React, { Component } from 'react'

import { GridX, Cell } from 'Components/Layouts'
import HeadingClods from 'Components/HeadingClods'
import CardSeel from 'Components/CardSeel'

class HomePagePopularProducts extends Component<{}> {
  render() {
    return (
      <GridX>
        <Cell span="small-12" exClass="mb-md">
          <HeadingClods title="Popular Products" />
        </Cell>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
          <Cell span="small-3" exClass="mb-md" key={`pp-${item}`}>
            <CardSeel
              imgSrc="https://unsplash.it/270/360"
              title="T-Shirt Stripes Unique"
              url="/"
              catName="Coat"
              catUrl="/"
              price="$299"
            />
          </Cell>
        ))}
      </GridX>
    )
  }
}

export default HomePagePopularProducts
