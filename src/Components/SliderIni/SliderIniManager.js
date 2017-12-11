// @flow

import * as React from 'react'

type Props = {
  itemsLength: number,
  render: ({
    currentSlide: number,
    setCurrentSlide: (slide: number) => void,
    next: () => void,
    prev: () => void
  }) => React.Node
}

type State = {
  currentSlide: number
}

class SliderIniManger extends React.Component<Props, State> {
  state = {
    currentSlide: 0
  }

  setCurrentSlide = (slide: number) => {
    this.setState({ currentSlide: slide })
  }

  next = () => {
    if (this.state.currentSlide >= this.props.itemsLength - 1) {
      return
    }

    this.setState(({ currentSlide }) => ({
      currentSlide: currentSlide + 1
    }))
  }

  prev = () => {
    if (this.state.currentSlide <= 0) {
      return
    }

    this.setState(({ currentSlide }) => ({
      currentSlide: currentSlide - 1
    }))
  }

  render() {
    const { currentSlide } = this.state
    const { render } = this.props

    return (
      <React.Fragment>
        {render({
          currentSlide,
          setCurrentSlide: this.setCurrentSlide,
          next: this.next,
          prev: this.prev
        })}
      </React.Fragment>
    )
  }
}

export default SliderIniManger
