// @flow

import React, { Component } from 'react'

import CardPrede from 'Components/CardPrede'
import { GridXContainer, Cell } from 'Components/Layouts'
import HeadingClods from 'Components/HeadingClods'

class HomePageBlogList extends Component<{}> {
  render() {
    return (
      <div className="py-xl bg-gray">
        <GridXContainer>
          <Cell span="small-12" exClass="mb-md">
            <HeadingClods title="From The Blogs" />
          </Cell>
          {[1, 2, 3].map(item => (
            <Cell span="small-4" key={`blog-${item}`}>
              <CardPrede
                imgSrc="https://unsplash.it/400/225/"
                title="Collection Winter Trending"
                url="/"
                date="Jun 18, 2017"
                text="Swimming hundreds of feet beneath the ocean’s surface in many parts of the world are prolific architects called giant larvaceans. These zooplankton are not particularly giant themselves."
                ctaTitle="Read more"
              />
            </Cell>
          ))}
        </GridXContainer>
      </div>
    )
  }
}

export default HomePageBlogList
