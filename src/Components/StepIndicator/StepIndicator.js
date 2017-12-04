// @flow

import React, { PureComponent, Fragment } from 'react'
import cx from 'classnames'
import { uniqueId, padStart } from 'lodash'

type Props = {
  currentStep: number,
  steps: Array<string>
}

class StepIndicator extends PureComponent<Props> {
  render() {
    const { currentStep, steps } = this.props

    return (
      <div className="step">
        {steps.map((step, index) => (
          <Fragment key={uniqueId('step')}>
            <div
              className={cx('step__checkpoint', {
                done: index + 1 <= currentStep
              })}
              data-test="step-checkpoint"
            >
              <div className="step__item">
                {padStart((index + 1).toString(), 2, '0')}
              </div>
              <div className="step__text">{step}</div>
            </div>
            {!(steps.length === index + 1) && (
              <div className="step__line" data-test="step-line">
                <div className="step__line-icon">
                  <i className="fa fa-caret-right" />
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    )
  }
}

export default StepIndicator
