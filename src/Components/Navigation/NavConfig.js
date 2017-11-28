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
    path: '/women',
    megaMenu: [
      {
        title: 'Clothing',
        items: [
          {
            title: 'Shirts',
            path: '/women/clothing/shirts'
          },
          {
            title: 'Sweaters',
            path: '/women/clothing/sweaters'
          },
          {
            title: 'Pants',
            path: '/women/clothing/pants'
          },
          {
            title: 'Jeans',
            path: '/women/clothing/jeans'
          }
        ]
      },
      {
        title: 'Clothing',
        items: [
          {
            title: 'Shirts',
            path: '/women/clothing/shirts'
          },
          {
            title: 'Sweaters',
            path: '/women/clothing/sweaters'
          },
          {
            title: 'Pants',
            path: '/women/clothing/pants'
          },
          {
            title: 'Jeans',
            path: '/women/clothing/jeans'
          }
        ]
      }
    ]
  },
  {
    title: 'Men',
    path: '/men',
    megaMenu: [
      {
        title: 'Clothing',
        items: [
          {
            title: 'Shirts',
            path: '/men/clothing/shirts'
          },
          {
            title: 'Sweaters',
            path: '/men/clothing/sweaters'
          },
          {
            title: 'Pants',
            path: '/men/clothing/pants'
          },
          {
            title: 'Jeans',
            path: '/men/clothing/jeans'
          }
        ]
      }
    ]
  },
  {
    title: 'about',
    path: '/about'
  },
  {
    title: 'contact',
    path: '/contact'
  }
]

export default navItemsConfig
