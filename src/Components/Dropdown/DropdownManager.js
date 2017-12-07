// @flow

import * as React from 'react'

type Props = {
  render: ({ isShow: boolean, toggle: () => void }) => React.Node
}

type State = {
  isShow: boolean
}

export class DropdownManager extends React.PureComponent<Props, State> {
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
      <React.Fragment>
        {this.props.render({
          isShow,
          toggle: this.toggle
        })}
      </React.Fragment>
    )
  }
}
