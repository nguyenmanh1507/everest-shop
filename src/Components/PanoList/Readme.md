PanoList example:

```js
const { BrowserRouter } = require('react-router-dom');

const data = [
  {
    bgImage: 'https://unsplash.it/600/600/?image=831',
    title: 'MEN\'S COLLECTION',
    subTitle: 'There\'s always room for improvement',
    text: 'The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter.',
    ctaUrl: '/',
    ctaTitle: 'View Collection'
  },
  {
    bgImage: 'https://unsplash.it/600/600/?image=825',
    title: 'ACCESSORIES COLLECTION',
    subTitle: 'All the best products',
    text: 'The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter.',
    ctaUrl: '/',
    ctaTitle: 'View Collection'
  },
  {
    bgImage: 'https://unsplash.it/600/600/?image=811',
    title: 'WOMEN\'S COLLECTION',
    subTitle: 'For Elegant Ladies',
    text: 'The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter.',
    ctaUrl: '/',
    ctaTitle: 'View Collection'
  },
];

<BrowserRouter>
  <PanoList data={data} />
</BrowserRouter>
```
