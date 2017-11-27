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

const navItems: navItemsType = [
  {
    title: 'Home',
    path: '/',
    exact: true
  },
  {
    title: 'Features',
    path: '/features',
    dropdown: [
      {
        title: 'Support Center',
        path: '/support'
      },
      {
        title: 'Delivery',
        path: '/delivery'
      },
      {
        title: 'Smartphone',
        path: '/smartphone'
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
      },
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
      },
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
      },
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

export default navItems
