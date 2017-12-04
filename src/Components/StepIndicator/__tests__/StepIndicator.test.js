// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import forEach from 'lodash/forEach'

import StepIndicator from '../StepIndicator'

configure({ adapter: new Adapter() })

test('StepIndicator render properly', () => {
  let component = renderer.create(renderStepIndicator())

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Step 2
  component = renderer.create(renderStepIndicator(2))
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Step 3
  component = renderer.create(renderStepIndicator(3))
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<StepIndicator>', () => {
  test('First checkpoint should has done class if currentStep = 1', () => {
    const wrapper = shallow(renderStepIndicator())

    expect(
      wrapper
        .find('[data-test="step-checkpoint"]')
        .first()
        .hasClass('done')
    ).toBeTruthy()
  })

  test('All checkpoint should has done class if currentStep = total steps', () => {
    const wrapper = shallow(renderStepIndicator(3))

    const checkpoints = wrapper
      .find('[data-test="step-checkpoint"]')
      .forEach(node => {
        expect(node.hasClass('done')).toBeTruthy()
      })
  })

  test('Checkpoints that has step number <= current step should has done class and ver vice', () => {
    let i = 1
    const stepNumber = 2
    const wrapper = shallow(renderStepIndicator(stepNumber))
    wrapper.find('[data-test="step-checkpoint"]').forEach(node => {
      if (i <= stepNumber) {
        expect(node.hasClass('done')).toBeTruthy()
      } else {
        expect(node.hasClass('done')).toBeFalsy()
      }
      i++
    })
  })

  test('Total step line should equal total step checkpoint - 1', () => {
    const wrapper = shallow(renderStepIndicator())

    const totalStepLine = wrapper.find('[data-test="step-line"]').length
    const totalStepCheckpoint = wrapper.find('[data-test="step-checkpoint"]')
      .length

    expect(totalStepLine).toBe(totalStepCheckpoint - 1)
  })
})

function renderStepIndicator(currentStep = 1) {
  const steps = ['Shopping Cart', 'Payment', 'Order Complete']

  return <StepIndicator steps={steps} currentStep={currentStep} />
}
