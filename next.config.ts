import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  /* async rewrites() {
    return [
      {
        source: "/:locale/api/:path*",
        destination: "/api/:path*", // Remove locale from API requests
      },
    ];
  }, */
  typescript: {
    ignoreBuildErrors: true,
  },
});
