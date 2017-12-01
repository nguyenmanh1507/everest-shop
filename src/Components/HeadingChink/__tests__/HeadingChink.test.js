// @flow

import React from 'react'
import renderer from 'react-test-renderer'

import HeadingChink from '../HeadingChink'

test('HeadingChink render properly', () => {
  const component = renderer.create(<HeadingChink title="related products" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('HeadingChink with extra class', () => {
  const component = renderer.create(
    <HeadingChink title="related products" exClass="mb-lg" />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
