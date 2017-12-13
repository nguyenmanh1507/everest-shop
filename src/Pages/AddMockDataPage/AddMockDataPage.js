// @flow

import React, { Component } from 'react'
import firebase from 'firebase'

import { db } from 'FirebaseConfig'
import { products } from './data/products'

const productsTestRef = db.collection('productsTest')

function logError(error) {
  console.error('Error happen:', error)
}

class AddMockDataPage extends Component<{}> {
  handleClick = async () => {
    const docRef = await productsTestRef
      .add({
        name: products.name,
        price: products.price,
        salePercent: products.salePercent,
        shortDescription: products.shortDescription,
        description: products.description
      })
      .then(docRef => {
        console.info('Success write data')
        return docRef
      })
      .catch(logError)

    const reviewsSubCollectionRef = await docRef
      .collection('reviews')
      .add({
        name: 'John Doe',
        photo: 'https://unsplash.it/60/60?image=39',
        review:
          "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed",
        rating: 4,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(logError)

    console.log('Success add reviews', reviewsSubCollectionRef.id)

    const colorsSubCollectionRef = await docRef
      .collection('colors')
      .add({
        name: 'teal',
        photos: [
          {
            description: 'Life is about making an impact, not making an income',
            small: 'https://unsplash.it/60',
            medium: 'https://unsplash.it/200',
            large: 'https://unsplash.it/400'
          }
        ],
        sizes: [
          {
            quantity: 4,
            name: 'S'
          }
        ]
      })
      .catch(logError)

    console.log('Success add colors', colorsSubCollectionRef.id)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add mock data</button>
      </div>
    )
  }
}

export default AddMockDataPage
