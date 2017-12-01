// @flow

import React, { Component } from 'react'

import TabKikoi from 'Components/TabKikoi'

class ProductDetailExtraInfo extends Component<{}> {
  render() {
    return (
      <TabKikoi items={['Description', 'Reviews', 'FAQ']} tabActive={1}>
        <TabKikoi.Content>
          <p className="text-muted">
            Coupling a blended linen construction with tailored style, the River
            Island HR Jasper Blazer will imprint a ege touch of dapper charm
            into your after-dark wardrobe.wearing a size medium blazer, and
            usually takes a size medium/38L shirt. He is 6’2 1/2” (189cm) tall
            with a 38” (96 cm) chest and a 31” (78 cm) waist.
          </p>
          <ul>
            <li>
              Length: <span className="text-muted">74cm</span>
            </li>
            <li>
              Material:{' '}
              <span className="text-muted">90% Cotton, 10% Polyesste</span>
            </li>
            <li>
              Front patch pockets:{' '}
              <span className="text-muted">Chest pocket</span>
            </li>
            <li>
              Outer:{' '}
              <span className="text-muted">50% Linen & 50% Polyamide</span>
            </li>
          </ul>
        </TabKikoi.Content>
        <TabKikoi.Content>
          <p className="text-muted">Reviews content go here</p>
        </TabKikoi.Content>
        <TabKikoi.Content>
          <p className="text-muted">FAQ content go here</p>
        </TabKikoi.Content>
      </TabKikoi>
    )
  }
}

export default ProductDetailExtraInfo
