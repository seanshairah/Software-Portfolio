/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Production builds should never be blocked by lint; `npm run lint` is the gate.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Three.js and its ecosystem ship large ESM bundles; transpiling keeps them tree-shakeable.
  transpilePackages: ["three"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
