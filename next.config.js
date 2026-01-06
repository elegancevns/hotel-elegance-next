
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.theelegance.co.in",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:slug*.php",
        destination: "/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
