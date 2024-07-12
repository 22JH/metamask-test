/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "production"
    ? "https://22JH.github.io/metamask-test/"
    : "";

const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
