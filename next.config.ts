import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set NEXT_OUTPUT=export for static preview (out/)
  ...(process.env.NEXT_OUTPUT === "export" ? { output: "export" as const } : {}),
  reactStrictMode: true,
};

export default nextConfig;
