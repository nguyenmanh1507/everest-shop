// @flow

import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import store from 'Reduxx'
import Creators from 'Reduxx/productsRedux'

const withProductsData = (Component: React.ComponentType<any>) =>
  class extends React.Component<{ products: Object }> {
    static displayName = 'withProductsData'

    componentDidMount() {
      store.dispatch(Creators.fetchProductsRequest())
    }

    render() {
      const { products, ...rest } = this.props

      return <Component products={products} {...rest} />
    }
  }

const mapStateToProps = ({ products }: { products: Object }) => ({
  products
})

const mapDispatchToProps = dispatch => ({
  fetchProductsData: () => dispatch(Creators.fetchProductsRequest())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProductsData
)
