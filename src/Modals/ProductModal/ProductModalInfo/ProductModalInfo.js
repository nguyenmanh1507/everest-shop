// @flow

import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import ColorsList from 'Components/ColorsList'
import SizesList from 'Components/SizesList'

type Props = {
  match: Object
}

class ProductModalInfo extends Component<Props> {
  render() {
    const { match: { params } } = this.props

    return (
      <Fragment>
        <div className="d-flex mb-lg">
          <div className="item-fullfill">
            <h2 className="text-large mb-xs">Lilies Purple Valentine</h2>
            <div className="list-inline">
              <div className="list-item">
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-secondary" />
                <i className="fa fa-star text-muted" />
              </div>
              <div className="list-item">
                <div className="list-separate">
                  <div className="list-item">
                    <a href="#reviews" className="text-muted text-small">
                      4 Reviews
                    </a>
                  </div>
                  <div className="list-item">
                    <button href="#reviews" className="btn btn--link">
                      Add your review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to={`/products/${params.productSlug}`}
              className="btn btn--secondary mr-sm"
            >
              More information <i className="fa fa-chevron-right" />
            </Link>
          </div>
        </div>

        <div className="mb-lg">
          <span className="text-large text-bold mr-md">$102.35</span>
          <span className="text-muted text-line-through">$202.05</span>
        </div>

        <p className="mb-lg text-muted">
          Coupling a blended linen construction with tailored style the River
          Island HR Jasper Blazer will imprint a touch of dapper charm into your
          after-dark wardrobe.
        </p>

        <div className="divider mb-lg" />

        <div className="grid-x mb-lg">
          <div className="medium-2 cell mb-xs">
            <span className="text-bold">Colors</span>
          </div>
          <div className="medium-10 cell mb-xs">
            <ColorsList
              colors={['teal', 'indigo', 'green', 'deep-orange']}
              name="color-choice"
              handleColorSelect={() => {}}
            />
          </div>
          <div className="medium-2 cell">
            <span className="text-bold">Sizes</span>
          </div>
          <div className="medium-10 cell">
            <SizesList
              sizes={['S', 'M', 'L']}
              name="sizes-choice"
              handleSizeSelect={() => {}}
            />
          </div>
        </div>

        <div className="mb-lg d-flex">
          <div className="mr-md">
            <input
              type="number"
              className="form__control"
              min="1"
              max="10"
              value="1"
              onChange={() => {}}
            />
          </div>
          <button className="btn btn--secondary text-uppercase mr-md">
            <i className="fa fa-shopping-bag" /> Add to cart
          </button>
          <button className="btn btn--bordered">
            <i className="fa fa-heart-o" />
          </button>
        </div>

        <div className="grid-x mb-lg">
          <div className="medium-2 cell mb-xs">
            <span className="text-bold">Categories</span>
          </div>
          <div className="medium-10 cell mb-xs">
            <a href="/" className="text-muted">
              T-Shirt
            </a>
          </div>
          <div className="medium-2 cell">
            <span className="text-bold">Tags</span>
          </div>
          <div className="medium-10 cell">
            <a href="/" className="text-muted">
              Underwear
            </a>,{' '}
            <a href="/" className="text-muted">
              Cotton
            </a>,{' '}
            <a href="/" className="text-muted">
              Flyknit
            </a>
          </div>
        </div>

        <div className="divider mb-lg" />

        <div className="grid-x align-items-center">
          <div className="medium-2 cell">
            <span className="text-bold">Share on</span>
          </div>
          <div className="medium-10 cell">
            <div className="list-inline">
              <div className="list-item">
                <i className="fa fa-facebook" />
              </div>
              <div className="list-item">
                <i className="fa fa-google-plus" />
              </div>
              <div className="list-item">
                <i className="fa fa-twitter" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductModalInfo
