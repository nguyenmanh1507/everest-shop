// @flow

import React, { Component } from 'react'

import SliderIni from 'Components/SliderIni'

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

class ProductModalImages extends Component<{}> {
  render() {
    return <SliderIni data={data} />
  }
}

export default ProductModalImages
