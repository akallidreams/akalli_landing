import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "export",
  basePath: "/akalli-landing", // se seu projeto não for publicado na raiz do domínio, coloque o nome do repositório
  assetPrefix: "/akalli-landing", // também é bom setar
};

export default nextConfig;
