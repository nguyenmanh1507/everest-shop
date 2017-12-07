// @flow

import React, { Component, Fragment } from 'react'

import Modal from 'Components/Modal'
import ProductModalImages from './ProductModalImages'
import ProductModalInfo from './ProductModalInfo'
import { GridX, Cell } from 'Components/Layouts'

type Props = {
  history: Object
}

class ProductModal extends Component<Props> {
  back = (e: SyntheticEvent<HTMLElement>) => {
    e.stopPropagation()
    this.props.history.goBack()
  }

  render() {
    return (
      <Modal onRequestClose={this.back} show={true}>
        <GridX>
          <Cell span="large-6">
            <ProductModalImages />
          </Cell>
          <Cell span="large-6">
            <ProductModalInfo {...this.props} />
          </Cell>
        </GridX>
      </Modal>
    )
  }
}

export default ProductModal
