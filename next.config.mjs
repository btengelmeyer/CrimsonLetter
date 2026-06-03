/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/CrimsonLetter",
  assetPrefix: "/CrimsonLetter",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pedagog.ai",
      },
    ],
  },
};

export default nextConfig;
