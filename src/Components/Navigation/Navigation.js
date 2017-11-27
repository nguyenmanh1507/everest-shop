// @flow

import React, { Component } from 'react'
import NavToggleButton from './NavToggleButton'
import NavBody from './NavBody'

class Navigation extends Component<{}> {
  render() {
    return (
      <nav className="nav">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="small-12 cell">
              <NavToggleButton />
              <NavBody />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
