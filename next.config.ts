import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
