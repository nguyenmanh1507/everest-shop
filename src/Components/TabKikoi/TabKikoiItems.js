// @flow

import React, { Component } from 'react'
import cx from 'classnames'

type Props = {
  setCurrentTab: (tab: number) => void,
  items: Array<string>,
  currentTab: ?number,
  tabActive: number
}

class TabKikoiItem extends Component<Props> {
  handleNavItemClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const tab = parseInt(event.currentTarget.getAttribute('data-item'), 10)
    this.props.setCurrentTab(tab)
  }

  render() {
    const { items, currentTab, tabActive } = this.props

    return (
      <div className="tab__nav tab__nav--center">
        {items.map((item, index) => (
          <button
            key={`tab-${item}-${index + 1}`}
            className={cx('tab__nav-item', {
              active: currentTab
                ? currentTab === index + 1
                : tabActive === index + 1
            })}
            data-item={index + 1}
            data-test={`tab-item-${index + 1}`}
            onClick={this.handleNavItemClick}
          >
            {item}
          </button>
        ))}
      </div>
    )
  }
}

export default TabKikoiItem
