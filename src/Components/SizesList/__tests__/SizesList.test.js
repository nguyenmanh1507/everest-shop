// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import forEach from 'lodash/forEach'

import SizesList from '../SizesList'

configure({ adapter: new Adapter() })

const mockFn = jest.fn()

test('SizesList render properly', () => {
  const component = renderer.create(
    <SizesList name="select-single-test" handleSizeSelect={() => {}} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SizesList render list of checkbox', () => {
  const component = renderer.create(
    <SizesList
      name="select-single-test"
      selectMulti
      handleSizeSelect={() => {}}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SizesList render list of choice sizes', () => {
  const sizes = ['S', 'M', 'L']

  const component = renderer.create(
    <SizesList
      name="select-single-test"
      sizes={sizes}
      handleSizeSelect={() => {}}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<ColorList>', () => {
  const colorInputName = 'color'
  const wrapper = render(renderComp(colorInputName))

  test('All input should has same name attribute', () => {
    forEach(wrapper.find('[data-test="size-input"]'), node => {
      expect(node.attribs.name).toBe(colorInputName)
    })
  })

  test('Should render input radio by default', () => {
    forEach(wrapper.find('[data-test="size-input"]'), node => {
      expect(node.attribs.type).toBe('radio')
    })
  })

  test('Should render input radio by default', () => {
    const w = render(renderComp(colorInputName, true))
    forEach(w.find('[data-test="size-input"]'), node => {
      expect(node.attribs.type).toBe('checkbox')
    })
  })

  test('Should has number of input equal sizes props length', () => {
    const sizes = ['S', 'M', 'L']
    const sizesLength = sizes.length
    const w = render(renderComp(colorInputName, undefined, sizes))

    expect(w.find('[data-test="size-input"]')).toHaveLength(sizesLength)
  })

  test('Should remove duplicate name in sizes props', () => {
    const sizes = ['S', 'M', 'L']
    const sizesLength = sizes.length
    const sizesDuplicate = ['S', 'S', 'M', 'L', 'L']
    const w = render(renderComp(colorInputName, undefined, sizesDuplicate))

    expect(w.find('[data-test="size-input"]')).toHaveLength(sizesLength)
  })

  test('Should run handle function once when color select', () => {
    const w = mount(renderComp())
    w
      .find('[data-test="size-input"]')
      .first()
      .simulate('change')
    expect(mockFn.mock.calls.length).toBe(1)
  })
})

function renderComp(
  name = 'select-color-test',
  selectMulti = false,
  sizes = [],
  cb = mockFn
) {
  return (
    <SizesList
      name={name}
      selectMulti={selectMulti}
      sizes={sizes}
      handleSizeSelect={cb}
    />
  )
}
