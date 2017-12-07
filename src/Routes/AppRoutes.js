// @flow

import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

// import RouteWithSubRoutes from './RouteWithSubRoutes'
import HomePage from 'Pages/HomePage'
import CategoriesPage from 'Pages/CategoriesPage'
import ProductDetailPage from 'Pages/ProductDetailPage'
import CheckoutPage from 'Pages/CheckoutPage'
import ContactPage from 'Pages/ContactPage'
import AboutPage from 'Pages/AboutPage'
import ProductModal from 'Modals/ProductModal'

type Props = {
  location: Object
}

class AppRoutes extends Component<Props> {
  // Modal example: https://reacttraining.com/react-router/web/example/modal-gallery
  previousLocation = this.props.location

  componentWillUpdate(nextProps: Object) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (
      <Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          {/* Don't know why modal not work if use <RouteWithSubRoutes key={uniqueId('app-routes-')} {...route} /> instead */}
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/women" component={CategoriesPage} />
          <Route path="/men" component={CategoriesPage} />
          <Route path="/products/:productSlug" component={ProductDetailPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/preview/:productSlug" component={ProductDetailPage} />
        </Switch>
        {isModal ? (
          <Route path="/preview/:productSlug" component={ProductModal} />
        ) : null}
      </Fragment>
    )
  }
}

export default AppRoutes
