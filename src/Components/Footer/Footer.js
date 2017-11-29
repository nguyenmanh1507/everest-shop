// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component<{}> {
  render() {
    return (
      <footer>
        <div className="bg-dark py-lg">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="medium-6 cell">
                <div className="sh-2 sh-2--invert mb-lg">
                  <h2 className="sh-2__title">Popular Products</h2>
                </div>
                <p className="text-muted text-small">
                  Contact us at the address or phone number below. Save moments
                  romatic of you with couple’s collection from Everest if you
                  want !
                </p>
                <ul className="list-unstyled text-muted text-small">
                  <li className="mb-md">
                    <i className="fa fa-map-marker fa-fw" /> 728 Dooley Branch,
                    Beckershire, LA 63598-2909
                  </li>
                  <li className="mb-md">
                    <i className="fa fa-phone fa-fw" /> (0161) 347 8854
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw" /> hello@company.com
                  </li>
                </ul>
              </div>
              <div className="medium-2 cell">
                <div className="sh-2 sh-2--invert mb-lg">
                  <h2 className="sh-2__title">Information</h2>
                </div>
                <ul className="list-unstyled text-small">
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      SiteMap
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Search Terns
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Advanced Search
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="medium-2 cell">
                <div className="sh-2 sh-2--invert mb-lg">
                  <h2 className="sh-2__title">Customer care</h2>
                </div>
                <ul className="list-unstyled text-small">
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      My voucher
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Login
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      My Cart
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      WishLisht
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Checkout
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="medium-2 cell">
                <div className="sh-2 sh-2--invert mb-lg">
                  <h2 className="sh-2__title">Client service</h2>
                </div>
                <ul className="list-unstyled text-small">
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Money Back
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Free Shipping
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Support
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Orders & Returns
                    </Link>
                  </li>
                  <li className="mb-md">
                    <Link to="/" className="text-muted">
                      Gif Vourcher
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid-container cell">
            <div className="divider-dark my-md" />
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x align-items-center">
              <div className="medium-6 cell">
                <ul className="list-inline text-white">
                  <li>
                    <i className="fa fa-facebook" />
                  </li>
                  <li>
                    <i className="fa fa-google-plus" />
                  </li>
                  <li>
                    <i className="fa fa-twitter" />
                  </li>
                  <li>
                    <i className="fa fa-pinterest" />
                  </li>
                  <li>
                    <i className="fa fa-instagram" />
                  </li>
                </ul>
              </div>
              <div className="medium-2 cell">
                <span className="text-uppercase text-white">Newsletter</span>
              </div>
              <div className="medium-4 cell">
                <form action="/" className="form">
                  <input
                    type="email"
                    className="form__control"
                    placeholder="Enter your email"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-md">
          <div className="grid-container cell">
            <div className="d-flex align-items-center">
              <p className="m-0 text-muted text-small">
                &copy; 2017 Made with{' '}
                <i className="fa fa-keyboard-o text-secondary" />. All Rights
                Reserved.
              </p>
              <ul className="list-inline text-white ml-auto">
                <li>
                  <i className="fa fa-cc-mastercard" />
                </li>
                <li>
                  <i className="fa fa-cc-visa" />
                </li>
                <li>
                  <i className="fa fa-paypal" />
                </li>
                <li>
                  <i className="fa fa-google-wallet" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
