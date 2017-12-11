// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from 'Components/Navigation'
import SearchBar from './SearchBar'
import { GridXContainer, GridContainer, GridX, Cell } from 'Components/Layouts'
import ChangeLanguages from './ChangeLanguages'
import ChangeCurrencies from './ChangeCurrencies'
import logoImage from '../../static/images/logo.png'

class Header extends Component<{}> {
  render() {
    return (
      <header>
        <div className="bg-gray py-sm">
          <GridXContainer>
            <Cell span="small-12" exClass="cell d-flex flex-wrap">
              <div className="item-fullfill">
                <ul className="list-separate text-small">
                  <li>
                    <a href="tel:(+84) 123 456 789" className="text-muted">
                      FreeCall: (+84) 123 456 789
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@company.co" className="text-muted">
                      Email: hello@company.co
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="list-separate text-small">
                  <div className="list-item">
                    <ChangeLanguages />
                  </div>
                  <div className="list-item">
                    <ChangeCurrencies />
                  </div>
                  <div className="list-item">
                    <Link to="/" className="text-muted">
                      Your Account
                    </Link>
                  </div>
                </div>
              </div>
            </Cell>
          </GridXContainer>
        </div>
        <GridContainer>
          <GridX exClass="align-items-center py-lg">
            <Cell span="medium-5">
              <h1 className="m-0">
                <Link to="/">
                  <img src={logoImage} alt="Logo" />
                </Link>
              </h1>
            </Cell>
            <Cell span="medium-7" exClass="d-flex">
              <SearchBar />
              <Link to="/checkout/shopping-cart" className="d-flex">
                <i className="fa fa-shopping-bag fa-2x" />
                <div className="ml-sm">
                  <div className="text-muted text-small">Your Cart (2)</div>
                  <div className="text-bold">$89.00</div>
                </div>
              </Link>
            </Cell>
          </GridX>
        </GridContainer>
        <Navigation />
      </header>
    )
  }
}

export default Header
