/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.freepnglogos.com',
                port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.stickpng.com',
                port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: '1000logos.net',
                port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'freelogopng.com',
                port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

module.exports = nextConfig
