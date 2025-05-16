/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com", "github.com"],
  },
  reactStrictMode: true,
  trailingSlash: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  compiler: {
    removeConsole: true,
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.forestry.io/login",
        permanent: true,
        basePath: false,
      },
    ];
  },
};
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
