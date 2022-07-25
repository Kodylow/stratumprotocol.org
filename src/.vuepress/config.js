const { description } = require("../../package");

module.exports = {
  title: "Stratum V2 Documentation",
  description: description,
  base: "/",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/assets/stratum-v2-icon.svg" }],
  ],

  themeConfig: {
    logo: "/assets/stratum-v2-icon.svg",
    editLinks: false,
    lastUpdated: false,
    sidebarDepth: 2,
    sidebar: {
      "/implementation/": "auto",
      "/": "auto",
    },
    nav: [
      { text: "Features", link: "/features" },
      { text: "How To", link: "/how-to" },
      { text: "Implementation", link: "/implementation" },
      { text: "Specifications", link: "/specifications" },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  postcss: {
    plugins: [require("tailwindcss")(), require("autoprefixer")],
  },
};
