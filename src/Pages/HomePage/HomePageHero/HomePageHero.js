// @flow

import React, { Component } from 'react'

class HomePageHero extends Component<{}> {
  render() {
    return (
      <section className="hero">
        <div
          className="hero__item"
          style={{
            backgroundImage: 'url(https://unsplash.it/2100/900/?image=268)'
          }}
        >
          <div className="hero__content text-center">
            <h2 className="hero__title mb-xs">Spring Collection</h2>
            <h3 className="hero__sub-title mb-md">
              Unique & Simple style 2018
            </h3>
            <button className="btn btn--rounded btn--secondary btn--large text-uppercase">
              Shop now
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default HomePageHero
