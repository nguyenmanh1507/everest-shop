// @flow

import React, { Component, Fragment } from 'react'

import { Cell, GridXContainer, GridContainer } from 'Components/Layouts'
import ProductDetailInfo from './ProductDetailInfo'
import ProductDetailImages from './ProductDetailImages'
import ProductDetailExtraInfo from './ProductDetailExtraInfo'
import ProductDetailRelatedProducts from './ProductDetailRelatedProducts'
import Breadcrumb from 'Components/Breadcrumb'

type Props = {
  location: Object
}

class ProductDetailPage extends Component<Props> {
  render() {
    const { location } = this.props

    return (
      <Fragment>
        <Breadcrumb pathname={location.pathname} />
        <GridXContainer exClass="py-lg">
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
      </Fragment>
    )
  }
}

export default ProductDetailPage
