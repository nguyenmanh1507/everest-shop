// @flow

import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'
import navItemsConfig from './NavConfig'
import NavAddon from './NavAddon'
import NavItem from './NavItem'

class NavBody extends Component<{}> {
  render() {
    return (
      <div className="nav__body">
        {navItemsConfig.map(item => (
          <NavItem item={item} key={uniqueId('nav-item-')} />
        ))}
        <NavAddon />
      </div>
    )
  }
}

export default NavBody
