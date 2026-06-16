import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // On the server, replace framer-motion with a tiny no-op stub
    if (isServer) {
      config.resolve ||= {};
      config.resolve.alias ||= {};
      config.resolve.alias['framer-motion'] = join(process.cwd(), 'src/lib/framer-motion-stub.js');
    }
    return config;
  }
};

export default nextConfig;
