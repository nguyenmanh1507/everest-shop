// @flow

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Admin from 'Admin'

type Props = {
  location: Object
}

class AdminRoutes extends Component<Props> {
  render() {
    return (
      <Switch>
        <Route path="/admin" component={Admin} />
      </Switch>
    )
  }
}

export default AdminRoutes
