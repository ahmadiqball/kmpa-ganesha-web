/** @type {import('next').NextConfig} */
import UnoCss from '@unocss/webpack';

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config) => {
    config.plugins.push(
      UnoCss,
    );

    return config;
  },
};

export default nextConfig;
