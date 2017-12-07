// @flow

import React, { PureComponent, Fragment } from 'react'

type Props = {
  render: ({ isShow: boolean, toggle: () => void }) => void
}

type State = {
  isShow: boolean
}

class Dropdown extends PureComponent<Props, State> {
  state = {
    isShow: false
  }

  toggle = () => {
    this.setState(({ isShow }) => ({
      isShow: !isShow
    }))
  }

  render() {
    const { isShow } = this.state

    return (
      <Fragment>
        {this.props.render({
          isShow,
          toggle: this.toggle
        })}
      </Fragment>
    )
  }
}

export default Dropdown
