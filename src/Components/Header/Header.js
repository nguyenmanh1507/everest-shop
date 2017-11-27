// @flow

import React, { Component } from 'react'
import Navigation from '../Navigation'

class Header extends Component<{}> {
  render() {
    return (
      <header>
        <div className="bg-gray py-sm">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="small-12 cell d-flex flex-wrap">
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
                  <ul className="list-separate text-small">
                    <li>
                      <div className="text-muted">
                        <i className="fa fa-globe" /> Eng{' '}
                        <i className="fa fa-caret-down" />
                      </div>
                    </li>
                    <li className="text-muted">
                      USD <i className="fa fa-caret-down" />
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Your Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-x grid-padding-x align-items-center py-lg">
            <div className="medium-5 cell">
              <h1 className="m-0">
                <a href="#">
                  <img src="/images/logo.png" alt="" />
                </a>
              </h1>
            </div>
            <div className="medium-7 cell d-flex">
              <div className="item-fullfill mr-lg">
                <div className="form">
                  <div className="form__dropdown">
                    <input
                      type="text"
                      className="form__control"
                      placeholder="Search for products..."
                    />
                    <button className="form__dropdown-select">
                      All categories <i className="fa fa-caret-down" />
                    </button>
                    <ul className="form__dropdown-list">
                      <li className="form__dropdown-item">Swimming Shorts</li>
                      <li className="form__dropdown-item">T-Shirt</li>
                      <li className="form__dropdown-item">Sweatshirt</li>
                      <li className="form__dropdown-item">Tracksuit</li>
                      <li className="form__dropdown-item">Corset</li>
                    </ul>
                  </div>
                </div>
              </div>
              <a href="#" className="d-flex">
                <i className="fa fa-shopping-bag fa-2x" />
                <div className="ml-sm">
                  <div className="text-muted text-small">Your Cart (2)</div>
                  <div className="text-bold">$89.00</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
    )
  }
}

export default Header
