// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router-dom'
import { render, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import HeroCarousel from '../HeroCarousel'

const data = [
  {
    bgImage: 'https://unsplash.it/2100/900/?image=220',
    title: 'Spring Collection',
    subTitle: 'Unique & Simple style 2018',
    ctaText: 'Shop now',
    ctaUrl: '/'
  },
  {
    bgImage: 'https://unsplash.it/2100/900/?image=221',
    title: 'Spring Collection',
    subTitle: 'Unique & Simple style 2018',
    ctaText: 'Shop now',
    ctaUrl: '/'
  },
  {
    bgImage: 'https://unsplash.it/2100/900/?image=222',
    title: 'Spring Collection',
    subTitle: 'Unique & Simple style 2018',
    ctaText: 'Shop now',
    ctaUrl: '/'
  },
  {
    bgImage: 'https://unsplash.it/2100/900/?image=223',
    title: 'Spring Collection',
    subTitle: 'Unique & Simple style 2018',
    ctaText: 'Shop now',
    ctaUrl: '/'
  }
]

// ISSUE: Snapshot has issue with refs
// https://reactjs.org/blog/2016/11/16/react-v15.4.0.html#mocking-refs-for-snapshot-testing
// test('HeroCarousel render properly', () => {
//   const options = { createNodeMock }
//   const component = renderer.create(renderHeroCarousel(), options)

//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

describe('<HeroCarousel>', () => {
  const wrapper = render(renderHeroCarousel())

  test('Carousel content has total items equal data length', () => {
    expect(wrapper.find('[data-test="carousel-content"]')).toHaveLength(
      data.length
    )
  })

  test('Carousel paginate has total items equal data length', () => {
    expect(wrapper.find('[data-test="carousel-paginate"]')).toHaveLength(
      data.length
    )
  })

  test('First paginate button has active class, by default', () => {
    expect(
      wrapper
        .find('[data-test="carousel-paginate"]')
        .first()
        .hasClass('active')
    ).toBeTruthy()
  })

  test('Only paginate was clicked has active class', () => {
    // select third paginate
    const w = mount(renderHeroCarousel())
    let btn = w.find('[data-test="carousel-paginate"]').at(2)
    // default dont has class active
    expect(btn.hasClass('active')).toBeFalsy()

    // click third paginate
    btn.simulate('click')

    btn = w.find('[data-test="carousel-paginate"]').at(2)

    // now this paginate has active class
    expect(btn.hasClass('active')).toBeTruthy()
  })
})

function createNodeMock(element) {
  if (element.props['data-test'] === 'carousel-ref') {
    return <div className="siema" />
  }
  return null
}

function renderHeroCarousel() {
  const context = {}

  return (
    <StaticRouter context={context}>
      <HeroCarousel data={data} />
    </StaticRouter>
  )
}
