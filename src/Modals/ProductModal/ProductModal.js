// @flow

import React, { Component } from 'react'

type Props = {
  history: Object
}

class ProductModal extends Component<Props> {
  back = (e: SyntheticEvent<HTMLElement>) => {
    e.stopPropagation()
    this.props.history.goBack()
  }

  render() {
    return (
      <div
        onClick={this.back}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.15)'
        }}
      >
        <div
          className="modal"
          style={{
            position: 'absolute',
            background: '#fff',
            top: 25,
            left: '10%',
            right: '10%',
            padding: 15,
            border: '2px solid #444'
          }}
        >
          <h1>Product preview</h1>
          <button type="button" onClick={this.back}>
            Close
          </button>
        </div>
      </div>
    )
  }
}

export default ProductModal
