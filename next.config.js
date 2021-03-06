module.exports = {
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "www.datocms-assets.com", "i.scdn.co"],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
