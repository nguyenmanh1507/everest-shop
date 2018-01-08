// @flow

import { db } from 'FirebaseConfig'

const productsRef = db.collection('products')

export const api = {
  fetchProducts() {
    return productsRef
      .orderBy('timestamp', 'desc')
      .get()
      .then(snapshot => {
        let data = []

        snapshot.forEach(doc => {
          data = [...data, { id: doc.id, ...doc.data() }]
        })
        return data
      })
  }
}
