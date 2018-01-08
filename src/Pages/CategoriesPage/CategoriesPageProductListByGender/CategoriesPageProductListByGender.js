// @flow

import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'

import { GridX, Cell } from 'Components/Layouts'
import CardSeel from 'Components/CardSeel'
import { withProductsData } from 'HOCs'

type Props = {
  products: Object
}

class CategoriesPageProductListByGender extends Component<Props> {
  render() {
    const { products: { data } } = this.props

    return (
      <GridX>
        {data.map(d => (
          <Cell
            span="medium-4"
            exClass="mb-md"
            key={uniqueId('categories-page-product-list-')}
          >
            <CardSeel
              imgSrc={d.previewImg}
              title={d.name}
              url="/products/t-shirt-stripes-unique-zacfa31dse"
              previewUrl="/preview/t-shirt-stripes-unique-zacfa31dse"
              catName={d.category}
              catUrl={`${d.gender}/${d.category}`}
              price={`$${Number(d.price)}`}
            />
          </Cell>
        ))}
      </GridX>
    )
  }
}

export default withProductsData(CategoriesPageProductListByGender)
