// @flow

import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'

import { GridX, Cell } from 'Components/Layouts'
import CardSeel from 'Components/CardSeel'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class CategoriesPageProductListByKind extends Component<{}> {
  render() {
    return (
      <GridX>
        {data.map((d, index) => (
          <Cell
            span="medium-4"
            exClass="mb-md"
            key={uniqueId('categories-page-product-list-')}
          >
            <CardSeel
              imgSrc={`https://unsplash.it/270/360?image=16${index}`}
              title="T-Shirt Stripes Unique"
              url="/products/t-shirt-stripes-unique-zacfa31dse"
              previewUrl="/preview/t-shirt-stripes-unique-zacfa31dse"
              catName="Coat"
              catUrl="/"
              price="$299"
            />
          </Cell>
        ))}
      </GridX>
    )
  }
}

export default CategoriesPageProductListByKind
