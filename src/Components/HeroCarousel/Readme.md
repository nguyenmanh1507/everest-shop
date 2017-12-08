HeroCarousel example

```js
const { BrowserRouter } = require('react-router-dom');

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
];

<BrowserRouter>
  <HeroCarousel data={data} />
</BrowserRouter>
```
