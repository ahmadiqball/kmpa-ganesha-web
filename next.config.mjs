/** @type {import('next').NextConfig} */
import UnoCss from '@unocss/webpack';

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      UnoCss,
    );

    return config;
  },
};

export default nextConfig;
