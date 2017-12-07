// @flow

import React, { Component } from 'react'
import HeadingClods from 'Components/HeadingClods'
import CardSeel from 'Components/CardSeel'
import { GridX, Cell } from 'Components/Layouts'

class HomePageNewArrivals extends Component<{}> {
  render() {
    return (
      <GridX exClass="mt-xl">
        <Cell span="small-12" exClass="mb-md">
          <HeadingClods title="New Arrivals" />
        </Cell>
        <Cell span="small-3">
          {[1, 2, 3, 4].map(item => (
            <CardSeel
              key={`home-page-new-arrivals-${item}`}
              imgSrc="https://unsplash.it/270/360"
              title="T-Shirt Stripes Unique"
              url="/"
              previewUrl="/"
              catName="Coat"
              catUrl="/"
              price="$299"
            />
          ))}
        </Cell>
      </GridX>
    )
  }
}

export default HomePageNewArrivals
