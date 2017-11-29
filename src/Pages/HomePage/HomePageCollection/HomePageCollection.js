// @flow

import React, { Component } from 'react'
import CardTrama from '../../../Components/CardTrama'

class HomePageCollection extends Component<{}> {
  render() {
    return (
      <div className="grid-x grid-padding-x">
        <div className="medium-3 cell">
          <CardTrama
            imgSrc="https://unsplash.it/275/581?image=267"
            title="T-shirt Women"
            url="/"
          />
        </div>
        <div className="medium-6 cell">
          <CardTrama
            imgSrc="https://unsplash.it/570/570?image=221"
            title="Men Collection"
            url="/"
          />
        </div>
        <div className="medium-3 cell d-flex flex-column justify-content-between">
          <CardTrama
            imgSrc="https://unsplash.it/270/270?image=268"
            title="Shoes Collection"
            url="/"
          />

          <CardTrama
            imgSrc="https://unsplash.it/270/270?image=269"
            title="Men's Accessories"
            url="/"
          />
        </div>
      </div>
    )
  }
}

export default HomePageCollection
