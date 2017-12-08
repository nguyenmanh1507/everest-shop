// @flow

import * as React from 'react'
import Siema from 'siema'

type Props = {
  render: ({
    carouselRef: any,
    prev: () => void,
    next: () => void,
    goTo: (index: number) => void,
    currentIndex: number
  }) => React.Node
}

type State = {
  currentIndex: number
}

class HeroCarouselManager extends React.PureComponent<Props, State> {
  carousel: ?HTMLDivElement
  s: null

  state = {
    currentIndex: 0
  }

  componentDidMount() {
    this.s = new Siema({
      selector: this.carousel,
      onChange: this.trackCarousel
    })
  }

  componentWillUnmount() {
    if (this.s) {
      this.s.destroy()
    }
  }

  carouselRef = (el: HTMLDivElement) => {
    this.carousel = el
  }

  trackCarousel = () => {
    if (this.s) {
      this.setState({ currentIndex: this.s.currentSlide })
    }
  }

  prev = () => {
    if (this.s) {
      this.s.prev()
    }
  }

  next = () => {
    if (this.s) {
      this.s.next()
    }
  }

  goTo = (index: number) => {
    if (this.s) {
      this.s.goTo(index)
      this.setState({
        currentIndex: index
      })
    }
  }

  render() {
    const { currentIndex } = this.state
    const { render } = this.props
    return (
      <React.Fragment>
        {render({
          carouselRef: this.carouselRef,
          prev: this.prev,
          next: this.next,
          goTo: this.goTo,
          currentIndex
        })}
      </React.Fragment>
    )
  }
}

export default HeroCarouselManager
