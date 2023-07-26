/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }

  //   return config
  // },
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,

  // node: 'empty'
}

module.exports = nextConfig
