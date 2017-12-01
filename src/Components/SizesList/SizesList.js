// @flow

import React, { PureComponent } from 'react'
import { uniqueId, uniq } from 'lodash'

import type { SizesListType } from './SizesListType'
import Size from './Size'

const SizeCodeNames = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

class SizesList extends PureComponent<SizesListType> {
  static defaultProps = {
    selectMulti: false
  }

  render() {
    const { sizes, selectMulti, handleSizeSelect, name, ...rest } = this.props

    if (sizes && sizes.length > 0) {
      if (uniq(sizes).length !== sizes.length) {
        console.warn('Duplicate size name')
      }

      return (
        <div>
          {uniq(sizes).map(size => (
            <Size
              key={uniqueId(`size-${size}-`)}
              size={size}
              selectMulti={selectMulti}
              name={name}
              handleSizeSelect={handleSizeSelect}
              {...rest}
            />
          ))}
        </div>
      )
    }

    return (
      <div>
        {SizeCodeNames.map(size => (
          <Size
            key={uniqueId(`size-${size}-`)}
            size={size}
            selectMulti={selectMulti}
            name={name}
            handleSizeSelect={handleSizeSelect}
            {...rest}
          />
        ))}
      </div>
    )
  }
}

export default SizesList
