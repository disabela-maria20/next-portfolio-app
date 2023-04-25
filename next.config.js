/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    KEY_RECAPTCHA: '6LdzXrUlAAAAAPpKfD9OhhjjP-ZVyiMnui8vM4yH',
    KEY_RECAPTCHA_PRIVATE: '6LdzXrUlAAAAAFWHr17M9DB3RzLIh5D3LRgphKmr'
  }
  // distDir: 'build',
  // trailingSlash: true,
}

module.exports = nextConfig
