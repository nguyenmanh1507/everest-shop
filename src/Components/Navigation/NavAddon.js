// @flow

import React, { PureComponent } from 'react'

class NavAddon extends PureComponent<{}> {
  render() {
    return (
      <div className="nav__addon">
        <a href="tel:(364) 106-7572" className="nav__addon-item">
          <i className="fa fa-phone" /> Hot line: (364) 106-7572
        </a>
      </div>
    )
  }
}

export default NavAddon
