// @flow

import * as React from 'react'
import cx from 'classnames'

type Props = {
  children: React.Node,
  tabContentIndex?: number,
  tabActive?: number,
  currentTab?: ?number
}

class TabKikoiContent extends React.Component<Props> {
  render() {
    const { children, tabActive, tabContentIndex, currentTab } = this.props

    return (
      <div
        className={cx('tab__content', {
          active: currentTab
            ? currentTab === tabContentIndex
            : tabActive === tabContentIndex
        })}
        data-test={`tab-content-${tabContentIndex || ''}`}
      >
        {children}
      </div>
    )
  }
}

export default TabKikoiContent
