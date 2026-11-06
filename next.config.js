const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";
module.exports = { reactStrictMode: true, output: "export", trailingSlash: true, basePath: bp, images: { unoptimized: true } };
