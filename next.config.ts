import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ac.goit.global",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/notes",
        destination: "/notes/filter/all",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
