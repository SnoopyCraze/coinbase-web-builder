/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  transpilePackages: [
    "@coinbase/cds-web",
    "@coinbase/cds-common",
    "@coinbase/cds-utils",
    "@coinbase/cds-icons",
    "@coinbase/cds-illustrations",
  ],
};

module.exports = nextConfig;
