// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { render } from 'enzyme'

import Divider from '../Divider'

test('Divider render properly', () => {
  const component = renderer.create(<Divider />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Divider render type dot', () => {
  const component = renderer.create(<Divider type="dot" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Divider render type dark', () => {
  const component = renderer.create(<Divider type="dark" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Divider with extra class', () => {
  const component = renderer.create(<Divider type="dot" exClass="my-md" />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
