/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_URL: process.env.API_URL || 'https://json-server-vercel-portfolio.vercel.app'
  }
  // distDir: 'build',
  // trailingSlash: true,
}

module.exports = nextConfig
