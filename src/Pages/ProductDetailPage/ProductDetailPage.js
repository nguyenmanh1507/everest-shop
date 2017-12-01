// @flow

import React, { Component } from 'react'

import { Cell, GridXContainer, GridContainer } from 'Components/Layouts'
import ProductDetailInfo from './ProductDetailInfo'
import ProductDetailImages from './ProductDetailImages'
import ProductDetailExtraInfo from './ProductDetailExtraInfo'
import ProductDetailRelatedProducts from './ProductDetailRelatedProducts'

class ProductDetailPage extends Component<{}> {
  render() {
    return (
      <div className="py-lg">
        <GridXContainer>
          <Cell span="large-6">
            <ProductDetailImages />
          </Cell>
          <Cell span="large-6">
            <ProductDetailInfo />
          </Cell>
        </GridXContainer>
        <GridContainer exClass="cell mt-xl">
          <ProductDetailExtraInfo />
        </GridContainer>
        <ProductDetailRelatedProducts />
      </div>
    )
  }
}

export default ProductDetailPage
