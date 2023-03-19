/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    nextScriptWorkers: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atstore.id",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "adminpanel.sacode.web.id",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
