// @flow

import React, { Component } from 'react'

import { GridX } from 'Components/Layouts'

class CheckoutPagePayment extends Component<{}> {
  render() {
    return (
      <GridX exClass="mt-xl">
        <div className="large-6 cell">
          <form action="/" className="form py-md">
            <h3 className="text-large text-uppercase mb-lg">Billing details</h3>
            <div className="grid-x grid-padding-x">
              <div className="large-6 cell mb-md">
                <label htmlFor="first-name">First name</label>
                <input type="text" className="form__control" id="first-name" />
              </div>
              <div className="large-6 cell mb-md">
                <label htmlFor="last-name">Last name</label>
                <input type="text" className="form__control" id="last-name" />
              </div>
              <div className="large-6 cell mb-md">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form__control" id="email" />
              </div>
              <div className="large-6 cell mb-md">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" className="form__control" id="phone" />
              </div>
              <div className="large-12 cell mb-md">
                <label htmlFor="company">Company name (Optional)</label>
                <input type="text" className="form__control" id="company" />
              </div>
              <div className="large-12 cell mb-md">
                <label htmlFor="country">Country</label>
                <select type="text" className="form__control" id="country">
                  <option value="vn">Vietnam</option>
                  <option value="vn">Vietnam</option>
                  <option value="vn">Vietnam</option>
                  <option value="vn">Vietnam</option>
                </select>
              </div>
              <div className="large-6 cell mb-md">
                <label htmlFor="tc">Town/City</label>
                <input type="text" className="form__control" id="tc" />
              </div>
              <div className="large-6 cell mb-md">
                <label htmlFor="pz">Postcode/Zip</label>
                <input type="text" className="form__control" id="pz" />
              </div>
              <div className="large-12 cell mb-md">
                <label htmlFor="address">Address</label>
                <input type="text" className="form__control" id="address" />
              </div>
            </div>

            <label>
              <input type="checkbox" className="mr-sm" />
              <span>Create an Account?</span>
            </label>
          </form>

          <div className="divider" />

          <button className="btn btn--primary mt-md">
            Shipping to a difference address
          </button>
        </div>
        <div className="large-6 cell">
          <section className="bg-dark p-md">
            <h3 className="text-large text-uppercase text-white mb-md">
              Your order
            </h3>
            <div className="divider-dark mb-md" />
            <h4 className="text-white text-size-base text-uppercase mb-md">
              Product
            </h4>
            <div className="grid-x mb-sm text-small">
              <div className="small-7">
                <div className="d-flex">
                  <span className="text-muted item-fullfill mr-sm">
                    Slimpit Vest Urban Men
                  </span>
                  <span className="text-white">x 1</span>
                </div>
              </div>
              <div className="small-5 text-secondary text-right item-no-shrink">
                $89.00
              </div>
            </div>

            <div className="grid-x text-small">
              <div className="small-7">
                <div className="d-flex">
                  <span className="text-muted item-fullfill mr-sm">
                    Underware Black
                  </span>
                  <span className="text-white">x 2</span>
                </div>
              </div>
              <div className="small-5 text-secondary text-right item-no-shrink">
                $138.00
              </div>
            </div>

            <div className="divider-dark mt-md" />

            <div className="py-md d-flex">
              <h4 className="text-white text-size-base text-uppercase m-0 item-fullfill">
                Subtotals
              </h4>
              <span className="text-secondary text-bold">$356.00</span>
            </div>

            <div className="divider-dark" />

            <div className="grid-x py-md">
              <div className="small-12 medium-5 d-flex">
                <h4 className="text-white text-size-base text-uppercase mb-md">
                  Shipping
                </h4>
              </div>
              <div className="small-8 medium-4 text-muted text-right text-small">
                <div className="mb-sm">Free shipping</div>
                <div className="mb-sm">FedEx Fast Shipping</div>
                <div>Shipping Delivery</div>
              </div>
              <div className="small-4 medium-3 text-small text-right">
                <label className="mb-sm d-block">
                  <span className="text-secondary mr-sm">$0.00</span>
                  <input
                    type="radio"
                    name="shipping-method"
                    checked
                    onChange={() => {}}
                  />
                </label>
                <label className="mb-sm d-block">
                  <span className="text-secondary mr-sm">$19.00</span>
                  <input type="radio" name="shipping-method" />
                </label>
                <label className="mb-sm d-block">
                  <span className="text-secondary mr-sm">$9.00</span>
                  <input type="radio" name="shipping-method" />
                </label>
              </div>
            </div>

            <div className="divider-dark" />

            <div className="py-md d-flex">
              <h4 className="text-white text-size-base text-uppercase m-0 item-fullfill">
                Order totals
              </h4>
              <span className="text-secondary text-bold">$356.00</span>
            </div>

            <div className="divider-dark" />

            <div className="py-md">
              <div className="mb-md">
                <label className="mb-0">
                  <input type="radio" name="payment-method" className="mr-sm" />
                  <span className="text-white">
                    Visa/Master card <i className="fa fa-cc-visa" />{' '}
                    <i className="fa fa-cc-mastercard" />
                  </span>
                </label>

                <div className="mt-sm grid-x grid-padding-x">
                  <div className="medium-12 large-6 cell">
                    <label
                      htmlFor="card-number"
                      className="text-white text-thin text-small"
                    >
                      Card number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      className="form__control"
                      placeholder="XX XXXX XXXX XXXX"
                    />
                  </div>
                  <div className="medium-6 large-3 cell">
                    <label
                      htmlFor="card-expire"
                      className="text-white text-thin text-small"
                    >
                      Expire
                    </label>
                    <input
                      type="text"
                      id="card-expire"
                      className="form__control"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="medium-6 large-3 cell">
                    <label
                      htmlFor="card-expire"
                      className="text-white text-thin text-small"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="card-expire"
                      className="form__control"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-0">
                  <input type="radio" name="payment-method" className="mr-sm" />
                  <span className="text-white">
                    Paypal <i className="fa fa-paypal" />
                  </span>
                </label>
              </div>
            </div>

            <div className="divider-dark" />

            <button className="btn btn--secondary mt-lg">Place order</button>
          </section>
        </div>
      </GridX>
    )
  }
}

export default CheckoutPagePayment
