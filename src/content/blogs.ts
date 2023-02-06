export type BlogMetadata = {
  links: string
  title: string
  description: string
  author: string
  publishedDate: string
  imageUrl: string
  imageUrlAlt: string
}

export const loremIpsum = {
  links: '/blog/lorem',
  title: 'Lorem',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis dolor volutpat sapien commodo interdum. Etiam bibendum ultrices luctus. Ut commodo egestas tincidunt. Nunc cursus ex ut varius pharetra. Etiam sit amet efficitur tortor. Sed porta imperdiet maximus. Suspendisse rutrum suscipit dignissim.',
  author: 'Lorem ipsum',
  publishedDate: '1234-03-02T05:17:32.000Z',
  imageUrl: '/blog1.jpeg',
  imageUrlAlt: 'Space digital art generated by stable diffusion.',
}

export const blogs = [loremIpsum, loremIpsum]
