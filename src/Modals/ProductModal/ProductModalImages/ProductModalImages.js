// @flow

import React, { Component } from 'react'

class ProductModalImages extends Component<{}> {
  render() {
    return (
      <div className="eps">
        <div className="eps__content">
          <img src="https://unsplash.it/420/560?image=322" alt="product" />
          <button className="eps__cta">
            <i className="fa fa-arrows-alt" />
          </button>
        </div>
        <div className="eps__list-thumbnail">
          <div className="eps__thumbnail">
            <img
              src="https://unsplash.it/90/120?image=240"
              className="eps__thumbnail-img"
              alt="product"
            />
          </div>
          <div className="eps__thumbnail">
            <img
              src="https://unsplash.it/90/120?image=241"
              className="eps__thumbnail-img"
              alt="product"
            />
          </div>
          <div className="eps__thumbnail">
            <img
              src="https://unsplash.it/90/120?image=242"
              className="eps__thumbnail-img"
              alt="product"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductModalImages
