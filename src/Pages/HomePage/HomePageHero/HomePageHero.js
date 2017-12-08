// @flow

import React, { Component } from 'react'

import HeroCarousel from 'Components/HeroCarousel'

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

class HomePageHero extends Component<{}> {
  render() {
    return <HeroCarousel data={data} />
  }
}

export default HomePageHero
