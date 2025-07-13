const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "upload.wikimedia.org",
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle HeartbeatWorker module issue
    config.module.rules.push({
      test: /HeartbeatWorker/,
      type: 'javascript/auto',
    });
    
    // Configure Terser to handle ES modules
    config.optimization.minimizer.forEach((minimizer) => {
      if (minimizer.constructor.name === 'TerserPlugin') {
        minimizer.options.terserOptions = {
          ...minimizer.options.terserOptions,
          module: true,
          parse: {
            ...minimizer.options.terserOptions?.parse,
            ecma: 2020,
          },
        };
      }
    });
    
    return config;
  },
};

module.exports = nextConfig;
