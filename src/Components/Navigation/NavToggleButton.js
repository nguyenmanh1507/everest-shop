// @flow

import React, { PureComponent } from 'react'

class NavToggleButton extends PureComponent<{}> {
  render() {
    return (
      <div className="nav__toggle">
        <button className="nav__toggle-btn">
          <i className="fa fa-bars fa-lg" />
        </button>
      </div>
    )
  }
}

export default NavToggleButton
