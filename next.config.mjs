/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/arsene',
        destination: '/arsene/index.html',
      },
    ];
  },
};

export default nextConfig;
