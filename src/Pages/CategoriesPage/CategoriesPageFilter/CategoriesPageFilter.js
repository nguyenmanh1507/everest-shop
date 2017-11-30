// @flow

import React, { Component } from 'react'
import Divider from 'Components/Divider'

class CategoriesPageFilter extends Component<{}> {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div className="text-uppercase text-bold">Sort by</div>
          <div className="ml-md">
            <select name="sorting" className="form__control">
              <option value="">A-Z (Alphabet)</option>
              <option value="">Z-A (Alphabet)</option>
              <option value="">$-$$$ (Price)</option>
              <option value="">$$$-$ (Price)</option>
            </select>
          </div>
        </div>
        <Divider type="dot" exClass="my-md" />
      </div>
    )
  }
}

export default CategoriesPageFilter
