// @flow

import * as React from 'react'

import TabKikoi from './TabKikoi'
import TabKikoiContent from './TabKikoiContent'

type Props = {
  /** Tab content */
  children: React.Node,
  /** Tab items text */
  items: Array<string>,
  /** Set tab item active */
  tabActive: number
}

type State = {
  currentTab: ?number
}

class TabKikoiContainer extends React.Component<Props, State> {
  static displayName = 'TabKikoi'
  static Content = TabKikoiContent

  static defaultProps = {
    tabActive: 1
  }

  state = {
    currentTab: null
  }

  setCurrentTab = (tab: number) => {
    this.setState({
      currentTab: tab
    })
  }

  render() {
    const { currentTab } = this.state
    const { children, items, tabActive } = this.props

    return (
      <TabKikoi
        setCurrentTab={this.setCurrentTab}
        currentTab={currentTab}
        items={items}
        tabActive={tabActive}
      >
        {children}
      </TabKikoi>
    )
  }
}

export default TabKikoiContainer
