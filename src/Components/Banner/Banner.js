// @flow

import React, { PureComponent } from 'react'
import cx from 'classnames'

type Props = {
  /** Component background image */
  bgImage: string,
  /** Component title */
  title: string,
  /** Component sub title */
  subTitle: string,
  /** Extra class */
  exClass?: string
}

class Banner extends PureComponent<Props> {
  render() {
    const { bgImage, title, subTitle, exClass } = this.props

    return (
      <section
        className={cx('banner', {
          [exClass || '']: exClass && exClass.length
        })}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="banner__body">
          <h3 className="banner__sub-title">{subTitle}</h3>
          <h2 className="banner__title">{title}</h2>
        </div>
      </section>
    )
  }
}

export default Banner
