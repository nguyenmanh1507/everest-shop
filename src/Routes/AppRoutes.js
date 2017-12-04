// @flow

import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'
import RouteWithSubRoutes from './RouteWithSubRoutes'
import HomePage from 'Pages/HomePage'
import CategoriesPage from 'Pages/CategoriesPage'
import ProductDetailPage from 'Pages/ProductDetailPage'
import CheckoutPage from 'Pages/CheckoutPage'
import CheckoutPageShoppingCart from 'Pages/CheckoutPage/CheckoutPageShoppingCart'
import CheckoutPagePayment from 'Pages/CheckoutPage/CheckoutPagePayment'
import CheckoutPageComplete from 'Pages/CheckoutPage/CheckoutPageComplete'
import ContactPage from 'Pages/ContactPage'
import AboutPage from 'Pages/AboutPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/women',
    component: CategoriesPage,
    exact: true
  },
  {
    path: '/women/:categoryId',
    component: CategoriesPage,
    exact: true
  },
  {
    path: '/women/:categoryId/:productKindId',
    component: CategoriesPage,
    exact: true
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

class AppRoutes extends Component<{}> {
  render() {
    return (
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={uniqueId('app-routes-')} {...route} />
        ))}
      </Switch>
    )
  }
}

export default AppRoutes
