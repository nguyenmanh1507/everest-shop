// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { trimStart, split } from 'lodash'

import Breadcrumb from '../Breadcrumb'

configure({ adapter: new Adapter() })

test('Breadcrumb render properly', () => {
  const match = { url: '/women/clothing/jeans' }

  const component = renderer.create(renderBreadcrumb(match))

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<Breadcrumb />', () => {
  const match = { url: '/women/clothing/jeans' }
  const wrapper = render(renderBreadcrumb(match))

  test("Always render homepage's link", () => {
    expect(wrapper.find('[data-test="bc-homepage-link"]')).toHaveLength(1)
  })

  test('Last item is span tag so it can not clicked', () => {
    expect(
      wrapper
        .find('[data-test="bc-item"]')
        .last()
        .is('span')
    ).toBeTruthy()
  })

  test('Items has same length with URL path', () => {
    const pathLength = split(trimStart(match.url, '/'), '/').length
    expect(wrapper.find('[data-test="bc-item"]')).toHaveLength(pathLength)
  })
})

function renderBreadcrumb(match) {
  const context = {}

  return (
    <StaticRouter context={context}>
      <Breadcrumb match={match} />
    </StaticRouter>
  )
}
