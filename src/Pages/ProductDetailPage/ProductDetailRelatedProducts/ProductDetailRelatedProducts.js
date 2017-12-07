// @flow

import React, { Component } from 'react'

import { Cell, GridXContainer } from 'Components/Layouts'
import CardSeel from 'Components/CardSeel'
import HeadingChink from 'Components/HeadingChink'

class ProductDetailRelatedProducts extends Component<{}> {
  render() {
    return (
      <GridXContainer exClass="mt-xl">
        <Cell span="small-12" exClass="text-center">
          <HeadingChink title="related products" exClass="mb-md" />
        </Cell>
        {[1, 2, 3, 4].map(p => (
          <Cell span="medium-3" key={`product-relate-${p}`}>
            <CardSeel
              imgSrc="https://unsplash.it/270/360"
              title="T-Shirt Stripes Unique"
              url="/"
              previewUrl="/"
              catName="Coat"
              catUrl="/"
              price="$299"
            />
          </Cell>
        ))}
      </GridXContainer>
    )
  }
}

export default ProductDetailRelatedProducts
