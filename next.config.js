/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const name = "Next";

const nextConfig = {
    images: {
        unoptimized: true,
        domains: ["https://limjeongsik.github.io/Next"],
    },
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    assetPrefix: !debug ? `/${name}/` : "",
};

module.exports = nextConfig;
