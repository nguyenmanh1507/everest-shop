// @flow

import React, { Component } from 'react'
import uniqueId from 'lodash/uniqueId'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'

type Props = {
  item: Object,
  isOpen: boolean,
  handleMouseEnter: () => void,
  handleMouseLeave: () => void
}

class NavItem extends Component<Props> {
  render() {
    const { item, isOpen, handleMouseEnter, handleMouseLeave } = this.props

    return (
      <div
        className={cx('nav__item', {
          'has-dropdown': item.dropdown,
          'has-mega': item.megaMenu
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          <div className={cx('nav__dropdown', { open: isOpen })}>
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
          <div className={cx('nav__mega', { open: isOpen })}>
            {item.megaMenu.map(mega => (
              <div className="nav__mega-list" key={uniqueId('nav-mega-items-')}>
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
    )
  }
}

export default NavItem
