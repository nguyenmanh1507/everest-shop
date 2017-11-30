// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { render } from 'enzyme'

import Banner from '../Banner'

test('Banner render properly', () => {
  const component = renderer.create(
    <Banner
      title="Flowe desk"
      subTitle="Inspiration"
      bgImage="https://unsplash.it/800/450?image=230"
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
