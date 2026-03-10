import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Docker: produces a self-contained build in .next/standalone
  // that can run with just `node server.js` (no node_modules needed).
  output: "standalone",
};

export default nextConfig;
