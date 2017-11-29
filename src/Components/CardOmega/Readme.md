ListBugles example:

```js
const { BrowserRouter } = require('react-router-dom');

const data = [
  {
    url: '/',
    title: 'Smart Watch'
  },
  {
    url: '/',
    title: 'Handmade'
  },
  {
    url: '/',
    title: 'Smart Watch'
  },
  {
    url: '/',
    title: 'Desk Space'
  },
  {
    url: '/',
    title: 'Decorations'
  }
];

<BrowserRouter>
  <ListBugles
    data={data}
  />
</BrowserRouter>
```
