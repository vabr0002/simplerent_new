const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3-eu-west-1.amazonaws.com",
        },
        {
          protocol: "https",
          hostname: "redirect.rentman.net",
        },
      ],
    },
  };
  
  export default nextConfig;