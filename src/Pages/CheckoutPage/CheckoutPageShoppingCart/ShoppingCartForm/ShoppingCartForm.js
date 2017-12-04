// @flow

import React, { Component } from 'react'

import { GridX, Cell } from 'Components/Layouts'

class ShoppingCartForm extends Component<{}> {
  render() {
    return (
      <GridX exClass="mt-xl">
        <Cell span="large-6">
          <h3 className="text-large text-uppercase mb-lg">
            Calculate shipping
          </h3>
          <form action="/" className="form">
            <div className="mb-md">
              <label htmlFor="country">Country</label>
              <select name="" id="country" className="form__control">
                <option value="vn">Vietnam</option>
                <option value="us">United State</option>
                <option value="eng">England</option>
                <option value="ita">Italia</option>
                <option value="fr">Franch</option>
              </select>
            </div>
            <div className="mb-md">
              <label htmlFor="state">State / Provice</label>
              <select name="" id="state" className="form__control">
                <option value="vn">Virginia</option>
                <option value="us">Georgia</option>
                <option value="eng">Texas</option>
                <option value="ita">Ohio</option>
                <option value="fr">Colorado</option>
              </select>
            </div>
            <div className="mb-md">
              <label htmlFor="zip">Post code / Zip</label>
              <input type="text" id="zip" className="form__control" />
            </div>
            <button className="btn btn--primary" type="submit">
              Estimate
            </button>
          </form>
        </Cell>
        <Cell span="large-6">
          <h3 className="text-large text-uppercase mb-lg">Cart totals</h3>
          <div className="mb-md">
            <div className="mb-md">
              <label htmlFor="" style={{ visibility: 'hidden' }}>
                fake label
              </label>
              <div className="d-flex py-sm" style={{ lineHeight: 1.2 }}>
                <span className="item-fullfill text-uppercase text-small mr-sm">
                  Subtotals
                </span>
                <span className="text-bold">$356.00</span>
              </div>
              <div className="divider" />
            </div>
            <div className="mb-md">
              <label htmlFor="" style={{ visibility: 'hidden' }}>
                fake label
              </label>
              <div className="d-flex py-sm" style={{ lineHeight: 1.2 }}>
                <span className="item-fullfill text-uppercase text-small mr-sm">
                  Shipping
                </span>
                <span className="text-bold">$0.00</span>
              </div>
              <div className="divider" />
            </div>
            <div className="mb-md">
              <label htmlFor="" style={{ visibility: 'hidden' }}>
                fake label
              </label>
              <div className="d-flex py-sm" style={{ lineHeight: 1.2 }}>
                <span className="item-fullfill text-uppercase text-small mr-sm">
                  Order totals
                </span>
                <span className="text-bold">$356.00</span>
              </div>
              <div className="divider" />
            </div>
          </div>
          <div className="d-flex">
            <div className="ml-auto">
              <button className="btn btn--secondary mr-sm">Continue shopping</button>
              <button className="btn btn--primary">Checkout</button>
            </div>
          </div>
        </Cell>
        <Cell span="large-6">
          <form action="/" className="form mt-xl">
            <h3 className="text-large text-uppercase mb-lg">Discount codes</h3>
            <div className="d-flex">
              <input
                type="text"
                className="form__control item-fullfill mr-md"
                placeholder="XX-XXXX-XX"
              />
              <button className="btn btn--primary" type="submit">
                Update
              </button>
            </div>
          </form>
        </Cell>
        <Cell span="large-6">
          <div className="mt-xl">
            <div className="text-bold text-uppercase mb-lg">
              <i className="fa fa-asterisk" /> Note:
            </div>
            <ul className="list-unstyled text-small">
              <li>
                <i className="fa fa-check-square-o" /> Does not apply to
                products that have been promotion from previous
              </li>
              <li>
                <i className="fa fa-check-square-o" /> No value shall be
                converted into cash
              </li>
              <li>
                <i className="fa fa-check-square-o" /> Not applicable 2 for the
                same product code
              </li>
            </ul>
          </div>
        </Cell>
      </GridX>
    )
  }
}

export default ShoppingCartForm
