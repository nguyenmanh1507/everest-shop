// @flow

import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'

import HeadingGlint from 'Components/HeadingGlint'
import CardOmega from 'Components/CardOmega'
import ListBugles from 'Components/ListBugles'
import ColorsList from 'Components/ColorsList'

const data = [
  {
    url: '/',
    title: 'Smart Watch'
  },
  {
    url: '/',
    title: 'Handmade'
  },
  {
    url: '/',
    title: 'Smart Watch'
  },
  {
    url: '/',
    title: 'Desk Space'
  },
  {
    url: '/',
    title: 'Decorations'
  }
]

class CategoriesPageSidebar extends Component<{}> {
  render() {
    return (
      <div>
        <HeadingGlint title="Categories" exClass="mb-md" />
        <ListBugles data={data} exClass="mb-lg" />

        <HeadingGlint title="Pricing" exClass="mb-md" />

        <HeadingGlint title="Colors" exClass="mb-md" />

        <div className="mb-lg">
          <form action="/">
            <ColorsList
              selectMulti
              handleColorSelect={() => {}}
              name="categories-colors"
            />
            <div className="mt-md">
              <button className="btn btn--link" type="reset">
                Clear all
              </button>
            </div>
          </form>
        </div>

        <HeadingGlint title="Sizes" exClass="mb-md" />

        <div className="mb-lg">
          <form action="/">
            <div className="mt-md">
              <button className="btn btn--link" type="reset">
                Clear all
              </button>
            </div>
          </form>
        </div>

        <HeadingGlint title="Manufactory" exClass="mb-md" />

        <ListBugles data={data} exClass="mb-lg" />

        <HeadingGlint title="Top rated" exClass="mb-md" />

        {[1, 2, 3, 4].map(item => (
          <CardOmega
            key={uniqueId('zxv-')}
            imgSrc={`https://unsplash.it/90/115?image=100${item}`}
            title="Collection Winter Trending"
            url="/"
            rating={4}
            price="$25"
            exClass="mb-sm"
          />
        ))}
      </div>
    )
  }
}

export default CategoriesPageSidebar
