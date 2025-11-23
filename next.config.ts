// next.config.js
const nextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for <Image /> to work on GitHub Pages
  },
  basePath: process.env.NODE_ENV === "production" ? "/react-modal-demo" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/react-modal-demo/" : "",
};

module.exports = nextConfig;
