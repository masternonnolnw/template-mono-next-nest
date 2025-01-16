/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['profile.line-scdn.net'],
    },
    transpilePackages: ['api-client'],
}

module.exports = nextConfig
