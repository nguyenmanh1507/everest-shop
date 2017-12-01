// @flow

import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'
import RouteWithSubRoutes from './RouteWithSubRoutes'
import HomePage from 'Pages/HomePage'
import CategoriesPage from 'Pages/CategoriesPage'
import ProductDetailPage from 'Pages/ProductDetailPage'

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
    path: '/about',
    component: HomePage
  },
  {
    path: '/contact',
    component: HomePage
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
