import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Gera a pasta 'out'
  images: {
    unoptimized: true,   // O GitHub Pages não suporta o componente de otimização de imagem nativo
  },
};

export default nextConfig;

