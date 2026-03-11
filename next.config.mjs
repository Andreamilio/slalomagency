/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/slalomagency' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/slalomagency' : '',
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
