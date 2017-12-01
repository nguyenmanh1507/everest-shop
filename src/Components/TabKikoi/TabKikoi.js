// @flow

import React, { Component, Children, cloneElement } from 'react'

import TabKikoiItems from './TabKikoiItems'
import TabKikoiContent from './TabKikoiContent'

type Props = {
  children: any,
  setCurrentTab: (tab: number) => void,
  items: Array<string>,
  currentTab: ?number,
  tabActive: number
}

class TabKikoi extends Component<Props> {
  contentNodeTotal = 0

  render() {
    const { children, setCurrentTab, items, currentTab, tabActive } = this.props

    let i = 1

    const childrenWithProps = Children.map(children, child => {
      this.contentNodeTotal++

      return cloneElement(child, {
        currentTab,
        tabActive,
        tabContentIndex: child.type === TabKikoiContent ? i++ : null
      })
    })

    return (
      <div className="tab">
        <TabKikoiItems
          setCurrentTab={setCurrentTab}
          items={items}
          currentTab={currentTab}
          tabActive={tabActive}
        />
        <div className="tab__body">{childrenWithProps}</div>
      </div>
    )
  }
}

export default TabKikoi
