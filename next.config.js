const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");

module.exports = withPWA(
  withSass({
    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    },
  })
);
