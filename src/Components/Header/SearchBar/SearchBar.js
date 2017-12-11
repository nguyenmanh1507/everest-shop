// @flow

import React, { Component } from 'react'
import cx from 'classnames'
import Downshift from 'downshift'

class SearchBar extends Component<{}> {
  render() {
    return (
      <div className="item-fullfill mr-lg">
        <div className="form">
          <Downshift
            render={({ isOpen, toggleMenu, getRootProps, closeMenu }) => (
              <div
                className="form__dropdown"
                onKeyDown={e => {
                  if (e.key === 'Escape') {
                    closeMenu()
                  }
                }}
              >
                <input
                  type="text"
                  className="form__control"
                  placeholder="Search for products..."
                />
                <button
                  className="form__dropdown-select"
                  type="button"
                  onClick={toggleMenu}
                >
                  All categories{' '}
                  <i
                    className={cx('fa', {
                      'fa-caret-down': !isOpen,
                      'fa-caret-up': isOpen
                    })}
                  />
                </button>
                <ul
                  className={cx('form__dropdown-list', {
                    show: isOpen
                  })}
                >
                  <li className="form__dropdown-item">Swimming Shorts</li>
                  <li className="form__dropdown-item">T-Shirt</li>
                  <li className="form__dropdown-item">Sweatshirt</li>
                  <li className="form__dropdown-item">Tracksuit</li>
                  <li className="form__dropdown-item">Corset</li>
                </ul>
              </div>
            )}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
