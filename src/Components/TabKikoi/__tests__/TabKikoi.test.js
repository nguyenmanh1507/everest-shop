// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { render, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { trimStart, split } from 'lodash'

import TabKikoi from '../TabKikoiContainer'

configure({ adapter: new Adapter() })

test('TabKikoi render properly', () => {
  const component = renderer.create(renderTabKikoi())

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<TabKikoi />', () => {
  test('Should has tab item equal tab content', () => {
    const wrapper = render(renderTabKikoi())
    const totalTabContent = wrapper.find('[data-test^="tab-content"]').length
    const tabItem = wrapper.find('[data-test^="tab-item"]')
    expect(tabItem).toHaveLength(totalTabContent)
  })

  test('Should throw error if tab item number difference tab content number', () => {
    // TODO: Throw error if pass more content than items length and vice versa
  })

  test('Tab item has index equal default tab active should has active class', () => {
    const tabActive = 2
    const wrapper = render(renderTabKikoi(undefined, tabActive))
    const tabItem = wrapper.find(`[data-test="tab-item-${tabActive}"]`)

    expect(tabItem.hasClass('active')).toBeTruthy()
  })

  test('Should has only one tab item has active class at time', () => {
    const wrapper = mount(renderTabKikoi())
    const lastTabItem = wrapper.find('[data-test^="tab-item"]').last()
    const tabItem = wrapper.find('[data-test^="tab-item"].active')

    expect(tabItem).toHaveLength(1)

    // click last tab item
    lastTabItem.simulate('click')
    // find tab item has active class again
    const newTabItem = wrapper.find('[data-test^="tab-item"].active')
    expect(newTabItem).toHaveLength(1)
  })

  test('Should has only one tab content has active class at time', () => {
    const wrapper = render(renderTabKikoi())
    const tabItem = wrapper.find('[data-test^="tab-content"].active')

    expect(tabItem).toHaveLength(1)
  })

  test('Render tab item with active class when clicked', () => {
    const wrapper = mount(renderTabKikoi(undefined, 1))
    let tabItem = wrapper.find('[data-test^="tab-item"]').last()

    // make sure tab item not has active class
    expect(tabItem.hasClass('active')).toBeFalsy()
    tabItem.simulate('click')

    // select tab item after clicked
    tabItem = wrapper.find('[data-test^="tab-item"]').last()
    expect(tabItem.hasClass('active')).toBeTruthy()
  })

  test('Tab index has active class equal tab content index has active class', () => {
    const items = ['Description', 'Reviews', 'FAQ']
    const wrapper = mount(renderTabKikoi(items))
    // select Reviews tab
    let tabItem = wrapper.find('[data-test="tab-item-2"]')

    // click this tab
    tabItem.simulate('click')

    // select Reviews tab after clicked
    tabItem = wrapper.find('[data-test="tab-item-2"]')
    // select Reviews content
    const tabContent = wrapper.find('[data-test="tab-content-2"]')

    expect(tabItem.hasClass('active')).toBeTruthy()
    expect(tabContent.hasClass('active')).toBeTruthy()
  })
})

function renderTabKikoi(
  items = ['Description', 'Reviews', 'FAQ'],
  tabActive = 1
) {
  return (
    <TabKikoi items={items} tabActive={tabActive}>
      {items.map((item, index) => (
        <TabKikoi.Content key={`tab-content-test-${index + 1}`}>
          <div>{`${item} content go here`}</div>
        </TabKikoi.Content>
      ))}
    </TabKikoi>
  )
}
