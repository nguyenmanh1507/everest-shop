// @flow

import React from 'react'
import renderer from 'react-test-renderer'

import Banner from '../Banner'

test('Banner render properly', () => {
  const component = renderer.create(
    <Banner
      title="Flowe desk"
      subTitle="Inspiration"
      bgImage="https://unsplash.it/800/450?image=230"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Banner with extra class', () => {
  const component = renderer.create(
    <Banner
      title="Flowe desk"
      subTitle="Inspiration"
      bgImage="https://unsplash.it/800/450?image=230"
      exClass="mb-md"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
