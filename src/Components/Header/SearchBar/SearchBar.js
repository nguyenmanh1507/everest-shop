// @flow

import React, { Component, Fragment } from 'react'
import cx from 'classnames'

import { DropdownManager } from 'Components/Dropdown'

class SearchBar extends Component<{}> {
  render() {
    return (
      <div className="item-fullfill mr-lg">
        <div className="form">
          <div className="form__dropdown">
            <input
              type="text"
              className="form__control"
              placeholder="Search for products..."
            />
            <DropdownManager
              render={({ isShow, toggle }) => (
                <Fragment>
                  <button
                    className="form__dropdown-select"
                    type="button"
                    onClick={toggle}
                  >
                    All categories{' '}
                    <i
                      className={cx('fa', {
                        'fa-caret-down': !isShow,
                        'fa-caret-up': isShow
                      })}
                    />
                  </button>
                  <ul
                    className={cx('form__dropdown-list', {
                      show: isShow
                    })}
                  >
                    <li className="form__dropdown-item">Swimming Shorts</li>
                    <li className="form__dropdown-item">T-Shirt</li>
                    <li className="form__dropdown-item">Sweatshirt</li>
                    <li className="form__dropdown-item">Tracksuit</li>
                    <li className="form__dropdown-item">Corset</li>
                  </ul>
                </Fragment>
              )}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
