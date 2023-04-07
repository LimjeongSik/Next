/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: "/Next",
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig;
