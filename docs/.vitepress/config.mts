import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gPredict | Whitepaper",
  description:
    "A Community-Driven, Somnia-Native Prediction Market by ANP Labs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/logo.png",
    siteTitle: false,

    nav: [
      { text: "Home", link: "/" },
      { text: "Whitepaper", link: "/whitepaper/introduction" },
      { text: "Website", link: "https://gpredict.io" },
      { text: "Start Now", link: "https://gpredict.io" },
    ],
    appearance: "force-dark",
    cleanUrls: true,

    search: {
      provider: "local",
    },

    base: '/gpredict-whitepaper/',

    sidebar: {
      "/whitepaper/": [
        {
          text: "Overview",
          items: [
            { text: "Introduction", link: "/whitepaper/introduction" },
            {
              text: "Vision & Core Values",
              link: "/whitepaper/vision-and-core-values",
            },
            {
              text: "Problem Statement",
              link: "/whitepaper/problem-statement",
            },
            { text: "What is gPredict?", link: "/whitepaper/what-is-gpredict" },
          ],
        },
        {
          text: "Protocol Design",
          items: [
            {
              text: "System Architecture",
              link: "/whitepaper/system-architecture",
            },
            { text: "Market Types", link: "/whitepaper/market-types" },
            {
              text: "Oracle & Settlement",
              link: "/whitepaper/oracle-and-settlement",
            },
            { text: "User Flows", link: "/whitepaper/user-flows" },
          ],
        },
        {
          text: "Economy & Governance",
          items: [
            { text: "Economy Overview", link: "/whitepaper/economy-overview" },
            {
              text: "Fees & Incentives",
              link: "/whitepaper/fees-and-incentives",
            },
            { text: "Token Model", link: "/whitepaper/token-model" },
            { text: "Governance", link: "/whitepaper/governance" },
          ],
        },
        {
          text: "Resources",
          items: [
            { text: "Security & Audits", link: "/whitepaper/security" },
            { text: "FAQ", link: "/whitepaper/faq" },
            { text: "Glossary", link: "/whitepaper/glossary" },
            { text: "Changelog", link: "/whitepaper/changelog" },
          ],
        },
      ],
      "/tutorials/": [
        {
          text: "Using gPredict",
          items: [
            { text: "Getting Started", link: "/tutorials/getting-started" },
            { text: "Create a Market", link: "/tutorials/create-market" },
            {
              text: "Participate in a Market",
              link: "/tutorials/participate-in-market",
            },
            {
              text: "Oracles & Validators",
              link: "/tutorials/oracles-and-validators",
            },
          ],
        },
      ],
    },

    head: [
      [
        "script",
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-K3SRXQBXLE",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K3SRXQBXLE');`,
      ],
    ],

    socialLinks: [
      { icon: "x", link: "https://x.com/gpredict" },
      { icon: "discord", link: "https://discord.gg/eJVtJ2CCyr" },
    ],
  },
  sitemap: {
    hostname: "https://whitepaper.gpredict.io",
  },
  lastUpdated: true,
  markdown: {
    math: true,
  },
});
