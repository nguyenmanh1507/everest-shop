// @flow

import React, { PureComponent } from 'react'

import type { SizeType } from './SizesListType'

class Size extends PureComponent<SizeType> {
  render() {
    const { size, selectMulti, name, handleSizeSelect, ...rest } = this.props

    return (
      <label className="brick-2 mr-xs">
        <input
          data-test="size-input"
          type={selectMulti ? 'checkbox' : 'radio'}
          name={name}
          onChange={handleSizeSelect}
          value={`${name}:${size}`}
          {...rest}
        />
        <span className="brick-2__body">{size}</span>
      </label>
    )
  }
}

export default Size
