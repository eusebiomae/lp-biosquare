/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = withImages({
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
    localeDetection: false
  },

  reactStrictMode: false,
  swcMinify: true,
  esModule: true,
  images: {
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    newNextLinkBehavior: false,
  },
});

module.exports = nextConfig;
