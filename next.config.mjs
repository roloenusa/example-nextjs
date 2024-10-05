/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // Ensures URLs end with a slash (good for static hosting)
  // If using basePath for Amplify domain path
  assetPrefix: './',
};

export default nextConfig;
