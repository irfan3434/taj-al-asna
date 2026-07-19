import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to THIS project folder.
  // A stray package-lock.json in the home directory was making Next.js
  // infer the wrong root, which can break module resolution and file
  // watching (and the Tailwind/PostCSS pipeline) under Turbopack.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
