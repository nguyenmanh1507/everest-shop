// @flow

import React from 'react'
import renderer from 'react-test-renderer'

import Modal from '../Modal'

const mockFn = jest.fn()

test('Modal render properly', () => {
  const component = renderer.create(
    <Modal onRequestClose={mockFn}>
      <h1>Modal content go here</h1>
    </Modal>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Modal render default show true', () => {
  const component = renderer.create(
    <Modal onRequestClose={mockFn} show={true}>
      <h1>Modal content go here</h1>
    </Modal>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
