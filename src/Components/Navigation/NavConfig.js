// @flow

type navItemsType = Array<{
  title: string,
  path: string,
  exact?: boolean,
  dropdown?: Array<{
    title: string,
    path: string
  }>,
  megaMenu?: Array<{
    title: string,
    items: Array<{
      title: string,
      path: string
    }>
  }>
}>

const navItemsConfig: navItemsType = [
  {
    title: 'Home',
    path: '/',
    exact: true
  },
  {
    title: 'Women',
    path: '/categories/women',
    megaMenu: [
      {
        title: 'Clothing',
        items: [
          {
            title: 'Shirts',
            path: '/categories/women/clothing/shirts'
          },
          {
            title: 'Sweaters',
            path: '/categories/women/clothing/sweaters'
          },
          {
            title: 'Pants',
            path: '/categories/women/clothing/pants'
          },
          {
            title: 'Jeans',
            path: '/categories/women/clothing/jeans'
          }
        ]
      }
    ]
  },
  // {
  //   title: 'Men',
  //   path: '/men',
  //   megaMenu: [
  //     {
  //       title: 'Clothing',
  //       items: [
  //         {
  //           title: 'Shirts',
  //           path: '/men/clothing/shirts'
  //         },
  //         {
  //           title: 'Sweaters',
  //           path: '/men/clothing/sweaters'
  //         },
  //         {
  //           title: 'Pants',
  //           path: '/men/clothing/pants'
  //         },
  //         {
  //           title: 'Jeans',
  //           path: '/men/clothing/jeans'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    title: 'about',
    path: '/about'
  },
  {
    title: 'contact',
    path: '/contact'
  },
  {
    title: 'Checkout',
    path: '/checkout',
    dropdown: [
      {
        title: 'Shopping Cart',
        path: '/checkout/shopping-cart'
      },
      {
        title: 'Payment',
        path: '/checkout/payment'
      },
      {
        title: 'Complete',
        path: '/checkout/complete'
      }
    ]
  }
]

export default navItemsConfig
