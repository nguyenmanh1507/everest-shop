// @flow

import React, { PureComponent } from 'react'

import type { ColorType } from './ColorsListType'

class Color extends PureComponent<ColorType> {
  render() {
    const { color, selectMulti, name, handleColorSelect, ...rest } = this.props

    return (
      <label className={`brick brick--${color} mr-xs`}>
        <input
          data-test="color-input"
          type={selectMulti ? 'checkbox' : 'radio'}
          name={name}
          onChange={handleColorSelect}
          value={`${name}:${color}`}
          {...rest}
        />
        <span className="brick__body" />
      </label>
    )
  }
}

export default Color
