// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import forEach from 'lodash/forEach'

import ColorsList from '../ColorsList'

configure({ adapter: new Adapter() })

const mockFn = jest.fn()

test('ColorsList render properly', () => {
  const component = renderer.create(
    <ColorsList name="select-single-test" handleColorSelect={() => {}} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ColorsList render list of checkbox', () => {
  const component = renderer.create(
    <ColorsList
      name="select-single-test"
      selectMulti
      handleColorSelect={() => {}}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('ColorsList render list of choice colors', () => {
  const colors = ['teal', 'indigo', 'green', 'deep-orange']

  const component = renderer.create(
    <ColorsList
      name="select-single-test"
      colors={colors}
      handleColorSelect={() => {}}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<ColorList>', () => {
  const colorInputName = 'color'
  const wrapper = render(renderComp(colorInputName))

  test('All input should has same name attribute', () => {
    forEach(wrapper.find('[data-test="color-input"]'), node => {
      expect(node.attribs.name).toBe(colorInputName)
    })
  })

  test('Should render input radio by default', () => {
    forEach(wrapper.find('[data-test="color-input"]'), node => {
      expect(node.attribs.type).toBe('radio')
    })
  })

  test('Should render input radio by default', () => {
    const w = render(renderComp(colorInputName, true))
    forEach(w.find('[data-test="color-input"]'), node => {
      expect(node.attribs.type).toBe('checkbox')
    })
  })

  test('Should has number of input equal colors props length', () => {
    const colors = ['teal', 'indigo', 'green', 'deep-orange']
    const colorsLength = colors.length
    const w = render(renderComp(colorInputName, undefined, colors))

    expect(w.find('[data-test="color-input"]')).toHaveLength(colorsLength)
  })

  test('Should remove duplicate name in colors props', () => {
    const colors = ['teal', 'indigo', 'green', 'deep-orange']
    const colorsLength = colors.length
    const colorsDuplicate = [
      'teal',
      'teal',
      'indigo',
      'green',
      'green',
      'deep-orange'
    ]
    const w = render(renderComp(colorInputName, undefined, colorsDuplicate))

    expect(w.find('[data-test="color-input"]')).toHaveLength(colorsLength)
  })

  test('Should run handle function once when color select', () => {
    const w = mount(renderComp())
    w
      .find('[data-test="color-input"]')
      .first()
      .simulate('change')
    expect(mockFn.mock.calls.length).toBe(1)
  })
})

function renderComp(
  name = 'select-color-test',
  selectMulti = false,
  colors = [],
  cb = mockFn
) {
  return (
    <ColorsList
      name={name}
      selectMulti={selectMulti}
      colors={colors}
      handleColorSelect={cb}
    />
  )
}
