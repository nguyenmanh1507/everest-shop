// @flow

import React, { Component } from 'react'
import Downshift from 'downshift'
import cx from 'classnames'

class ChangeCurrencies extends Component<{}> {
  render() {
    return (
      <Downshift
        render={({ isOpen, toggleMenu, getButtonProps }) => (
          <div className="dropdown">
            <button
              className="dropdown__btn"
              onClick={toggleMenu}
              {...getButtonProps()}
            >
              USD{' '}
              <i
                className={cx('fa', {
                  'fa-caret-down': !isOpen,
                  'fa-caret-up': isOpen
                })}
              />
            </button>
            <div
              className={cx('dropdown__list mt-sm', {
                open: isOpen
              })}
            >
              <button className="dropdown__item text-right">VND</button>
            </div>
          </div>
        )}
      />
    )
  }
}

export default ChangeCurrencies
