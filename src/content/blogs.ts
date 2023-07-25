export type BlogMetadata = {
  link: string
  title: string
  description: string
  author: string
  authorLink: string
  publishedDate: string
  imageUrl: string
  imageUrlAlt: string
}

export const aCaseForRustInDeepLearning = {
  link: '/blog/a-case-for-rust-in-deep-learning',
  title: 'A Case for Rust in Deep Learning',
  description: 'In this blog post, we\'ll explore the case for Rust in deep learning and why it may be a better option than Python. With its ability to handle complexity through safe and concurrent abstractions, Rust has the potential to tackle this field\'s biggest challenges in a way that Python cannot.',
  author: 'Nathaniel Simard',
  authorLink: 'https://github.com/nathanielsimard',
  publishedDate: '2023-02-11T19:00:00.000Z',
  imageUrl: '/blog1.jpeg',
  imageUrlAlt: 'Space digital art generated by stable diffusion.',
}

export const reducedMemoryUsage = {
  link: '/blog/burn-rusty-approach-to-tensor-handling',
  title: 'Reduced Memory Usage: Burn\'s Rusty Approach to Tensor Handling',
  description: 'The latest release of Burn includes significant changes to its memory management strategy, and tensor-allocated memory can now be reused way more often. Overall, these changes significantly reduce memory usage, especially on the CPU compared to PyTorch.',
  author: 'Nathaniel Simard',
  authorLink: 'https://github.com/nathanielsimard',
  publishedDate: '2023-03-21T19:00:00.000Z',
  imageUrl: '/blog2.jpeg',
  imageUrlAlt: 'Space digital art generated by stable diffusion.',

}

export const crossPlatformGpuBackend = {
  link: '/blog/cross-platform-gpu-backend',
  title: 'Burn\'s New Cross-Platform GPU Backend',
  description: 'The latest release of Burn includes significant changes to its memory management strategy, and tensor-allocated memory can now be reused way more often. Overall, these changes significantly reduce memory usage, especially on the CPU compared to PyTorch.',
  author: 'Nathaniel Simard',
  authorLink: 'https://github.com/nathanielsimard',
  publishedDate: '2023-03-21T19:00:00.000Z',
  imageUrl: '/blog3.jpeg',
  imageUrlAlt: 'Space digital art generated by stable diffusion.',

}
export const blogs = [aCaseForRustInDeepLearning, reducedMemoryUsage, crossPlatformGpuBackend]
