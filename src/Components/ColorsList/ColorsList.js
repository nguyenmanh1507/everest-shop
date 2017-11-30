// @flow

import React, { PureComponent } from 'react'
import { uniqueId, uniq } from 'lodash'

import type { ColorsListType } from './ColorsListType'
import Color from './Color'

const colorCodeNames = [
  'red',
  'pink',
  'purple',
  'deep-blue',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brow',
  'grey',
  'blue-grey',
  'black'
]

class ColorsList extends PureComponent<ColorsListType> {
  static defaultProps = {
    selectMulti: false
  }

  render() {
    const { colors, selectMulti, handleColorSelect, name, ...rest } = this.props

    if (colors && colors.length > 0) {
      if (uniq(colors).length !== colors.length) {
        console.warn('Duplicate color name')
      }

      return (
        <div>
          {uniq(colors).map(color => (
            <Color
              key={uniqueId(`color-${color}-`)}
              color={color}
              selectMulti={selectMulti}
              name={name}
              handleColorSelect={handleColorSelect}
              {...rest}
            />
          ))}
        </div>
      )
    }

    return (
      <div>
        {colorCodeNames.map(color => (
          <Color
            key={uniqueId(`color-${color}-`)}
            color={color}
            selectMulti={selectMulti}
            name={name}
            handleColorSelect={handleColorSelect}
            {...rest}
          />
        ))}
      </div>
    )
  }
}

export default ColorsList
