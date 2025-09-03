/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "json-api.uz",
        port: "",
      },
    ],
  },
};

export default nextConfig;
