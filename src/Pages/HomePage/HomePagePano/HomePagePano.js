// @flow

import React, { Component } from 'react'
import Pano from 'Components/Pano'

class HomePagePano extends Component<{}> {
  render() {
    return (
      <Pano
        bgImage="https://unsplash.it/1600/900/?image=855"
        title="Collection Winter Trending"
        subTitle="Overcoat For Men"
        ctaUrl="/"
        ctaTitle="Shop now"
      />
    )
  }
}

export default HomePagePano
