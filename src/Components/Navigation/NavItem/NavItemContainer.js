// @flow

import React, { Component } from 'react'
import NavItem from './NavItem'

type State = {
  isOpen: boolean
}

type Props = {
  item: Object
}

class NavItemContainer extends Component<Props, State> {
  state = {
    isOpen: false
  }

  openTimeout = null
  closeTimeout = null

  openSubMenu = () => {
    this.setState({
      isOpen: true
    })
  }

  closeSubMenu = () => {
    this.setState({
      isOpen: false
    })
  }

  handleMouseEnter = () => {
    this.openTimeout = setTimeout(this.openSubMenu, 400)
    clearTimeout(this.closeTimeout)
  }

  handleMouseLeave = () => {
    this.closeTimeout = setTimeout(this.closeSubMenu, 400)
    clearTimeout(this.openTimeout)
  }

  componentWillUnmount() {
    clearTimeout(this.openTimeout)
    clearTimeout(this.closeTimeout)
  }

  render() {
    const { item } = this.props
    const { isOpen } = this.state

    return (
      <NavItem
        item={item}
        isOpen={isOpen}
        handleMouseEnter={this.handleMouseEnter}
        handleMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

export default NavItemContainer
