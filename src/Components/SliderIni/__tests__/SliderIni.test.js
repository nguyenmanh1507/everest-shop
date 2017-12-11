// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { render, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SliderIni from '../SliderIni'

configure({ adapter: new Adapter() })

test('SliderIni render properly', () => {
  const component = renderer.create(renderSliderIni())

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<SliderIni>', () => {
  test('After click, thumbnail should has active class', () => {
    const wrapper = mount(renderSliderIni())

    // select second thumbnail
    let thumbnail = wrapper.find('[data-test="eps-thumbnail"]').at(1)
    expect(thumbnail.hasClass('active')).toBeFalsy()
    // click thumbnail
    thumbnail.simulate('click')
    // select again
    thumbnail = wrapper.find('[data-test="eps-thumbnail"]').at(1)
    expect(thumbnail.hasClass('active')).toBeTruthy()
  })

  // TODO: test next, prev function
})

function renderSliderIni() {
  const data = [
    {
      imgSrc: 'https://unsplash.it/420/560?image=244',
      imgSrcThumbnail: 'https://unsplash.it/90/120?image=244',
      description: 'Description go here'
    },
    {
      imgSrc: 'https://unsplash.it/420/560?image=241',
      imgSrcThumbnail: 'https://unsplash.it/90/120?image=241',
      description: 'Description go here'
    },
    {
      imgSrc: 'https://unsplash.it/420/560?image=242',
      imgSrcThumbnail: 'https://unsplash.it/90/120?image=242',
      description: 'Description go here'
    }
  ]

  return <SliderIni data={data} />
}
