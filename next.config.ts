import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Desactiva la optimización de imágenes para sitios estáticos.
    },
};

export default nextConfig;
