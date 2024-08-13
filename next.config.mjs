/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jbymoblt3fzt0jez.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
