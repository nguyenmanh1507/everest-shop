// @flow

import React, { Component } from 'react'

import { GridX, Cell } from 'Components/Layouts'

class ShoppingCartTable extends Component<{}> {
  render() {
    return (
      <GridX exClass="mt-xl">
        <Cell span="large-12">
          <table className="table table--align-middle">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(item => (
                <tr key={`shopping-cart-table-row-${item}`}>
                  <th scope="row">
                    <img src="https://unsplash.it/90/120?random" alt="product" />
                  </th>
                  <td>
                    <div className="mb-sm">Unisex Slimpit Vest Men</div>
                    <div className="d-flex flex-wrap text-small">
                      <div>
                        <span className="text-muted">Size: </span>
                        <span>X</span>
                      </div>
                      <span className="mx-sm text-muted">-</span>
                      <div>
                        <span className="text-muted">Color: </span>
                        <span>Blue</span>
                      </div>
                      <span className="mx-sm text-muted">-</span>
                      <div>
                        <span className="text-muted">Code: </span>
                        <span>USVM-256</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-bold">$89.00</td>
                  <td>
                    <input
                      type="number"
                      value="2"
                      className="form__control form__control--w-auto"
                      onChange={() => {}}
                    />
                  </td>
                  <td className="text-bold">$178.00</td>
                  <td>
                    <button className="btn btn--link text-muted">
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Cell>
      </GridX>
    )
  }
}

export default ShoppingCartTable
