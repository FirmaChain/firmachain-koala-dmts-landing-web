/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    env: {
        SITE_URL: process.env.SITE_URL,
        URL: process.env.API_HOST,
    },
};

module.exports = nextConfig;
