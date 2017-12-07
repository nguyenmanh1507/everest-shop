// @flow

import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'

// import RouteWithSubRoutes from './RouteWithSubRoutes'
import HomePage from 'Pages/HomePage'
import CategoriesPage from 'Pages/CategoriesPage'
import ProductDetailPage from 'Pages/ProductDetailPage'
import CheckoutPage from 'Pages/CheckoutPage'
import CheckoutPageShoppingCart from 'Pages/CheckoutPage/CheckoutPageShoppingCart'
import CheckoutPagePayment from 'Pages/CheckoutPage/CheckoutPagePayment'
import CheckoutPageComplete from 'Pages/CheckoutPage/CheckoutPageComplete'
import ContactPage from 'Pages/ContactPage'
import AboutPage from 'Pages/AboutPage'
import ProductModal from 'Modals/ProductModal'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/women',
    component: CategoriesPage,
    // routes: [
    //   {
    //     path: '/women/:categoryId',
    //     component: CategoriesPage
    //   },
    //   {
    //     path: '/women/:categoryId/:productKindId',
    //     component: CategoriesPage
    //   }
    // ]
  },
  {
    path: '/men',
    component: CategoriesPage
  },
  {
    path: '/products/:productSlug',
    component: ProductDetailPage
  },
  {
    path: '/preview/:productSlug',
    component: ProductDetailPage
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    routes: [
      {
        path: '/checkout/shopping-cart',
        component: CheckoutPageShoppingCart
      },
      {
        path: '/checkout/payment',
        component: CheckoutPagePayment
      },
      {
        path: '/checkout/complete',
        component: CheckoutPageComplete
      }
    ]
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/contact',
    component: ContactPage
  }
]

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
          {routes.map(route => (
            <Route
              key={uniqueId('app-routes-')}
              path={route.path}
              exact={route.exact || false}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes || []} />
              )}
            />
          ))}
        </Switch>
        {isModal ? (
          <Route path="/preview/:productSlug" component={ProductModal} />
        ) : null}
      </Fragment>
    )
  }
}

export default AppRoutes
