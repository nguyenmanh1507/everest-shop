// @flow

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import uniqueId from 'lodash/uniqueId'
import cx from 'classnames'
import navItems from './NavConfig'

class Navigation extends Component<{}> {
  render() {
    return (
      <nav className="nav">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="small-12 cell">
              <div className="nav__toggle">
                <button className="nav__toggle-btn">
                  <i className="fa fa-bars fa-lg" />
                </button>
              </div>
              <div className="nav__body">
                {navItems.map(item => (
                  <div
                    key={uniqueId('nav-item-')}
                    className={cx('nav__item', {
                      'has-dropdown': item.dropdown,
                      'has-mega': item.megaMenu
                    })}
                  >
                    <NavLink
                      to={item.path}
                      className="nav__link"
                      activeClassName="active"
                      exact={item.exact}
                    >
                      {item.title}{' '}
                      {(item.dropdown || item.megaMenu) && (
                        <i className="fa fa-caret-down" />
                      )}
                    </NavLink>
                    {item.dropdown && (
                      <div className="nav__dropdown">
                        {item.dropdown.map(dropdown => (
                          <NavLink
                            key={uniqueId('nav-dropdown-sub-item-')}
                            to={dropdown.path}
                            className="nav__sub-item"
                            activeClassName="active"
                          >
                            {dropdown.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                    {item.megaMenu && (
                      <div className="nav__mega">
                        {item.megaMenu.map(mega => (
                          <div
                            className="nav__mega-list"
                            key={uniqueId('nav-mega-items-')}
                          >
                            <div className="nav__mega-label">{mega.title}</div>
                            {mega.items.map(item => (
                              <NavLink
                                key={uniqueId('nav-mega-sub-item-')}
                                to={item.path}
                                className="nav__sub-item"
                                activeClassName="active"
                              >
                                {item.title}
                              </NavLink>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="nav__item has-mega">
                  <a href="#" className="nav__link">
                    Accessories <i className="fa fa-caret-down" />
                  </a>
                  <div className="nav__mega">
                    <div className="nav__mega-list">
                      <div className="nav__mega-label">Collection</div>
                      <a href="#" className="nav__sub-item active">
                        Support Center
                      </a>
                      <a href="#" className="nav__sub-item">
                        Delivery
                      </a>
                      <a href="#" className="nav__sub-item">
                        Smartphone
                      </a>
                      <a href="#" className="nav__sub-item">
                        Handmade
                      </a>
                    </div>
                    <div className="nav__mega-list">
                      <div className="nav__mega-label">Infomation</div>
                      <a href="#" className="nav__sub-item">
                        Support Center
                      </a>
                      <a href="#" className="nav__sub-item">
                        Delivery
                      </a>
                      <a href="#" className="nav__sub-item">
                        Smartphone
                      </a>
                      <a href="#" className="nav__sub-item">
                        Handmade
                      </a>
                    </div>
                    <div className="nav__mega-list">
                      <div className="nav__mega-label">Support Center</div>
                      <a href="#" className="nav__sub-item">
                        Support Center
                      </a>
                      <a href="#" className="nav__sub-item">
                        Delivery
                      </a>
                      <a href="#" className="nav__sub-item">
                        Smartphone
                      </a>
                      <a href="#" className="nav__sub-item">
                        Handmade
                      </a>
                    </div>
                    <div className="nav__mega-list">
                      <div className="px-md py-sm">
                        <a href="#">
                          <img
                            src="https://unsplash.it/260/162"
                            alt="Advertise"
                          />>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav__item">
                  <a href="#" className="nav__link">
                    Blog
                  </a>
                </div>
                <div className="nav__item">
                  <a href="#" className="nav__link">
                    Contact
                  </a>
                </div>

                <div className="nav__addon">
                  <a href="tel:(364) 106-7572" className="nav__addon-item">
                    <i className="fa fa-phone" /> Hot line: (364) 106-7572
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
