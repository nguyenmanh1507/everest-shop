// @flow

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Reduxx'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRoutes from './Routes/AppRoutes'
import './static/styles/style.min.css'

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route component={AppRoutes} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
