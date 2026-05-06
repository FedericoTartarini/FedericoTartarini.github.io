// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import fs from "node:fs";
import path from "node:path";
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dr Federico Tartarini",
  tagline:
    "Senior Lecturer | Horizon Fellow, The University of Sydney",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://FedericoTartarini.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FedericoTartarini", // Usually your GitHub org/user name.
  projectName: "FedericoTartarini.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-KGVK27VGQ7",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/FedericoTartarini/FedericoTartarini.github.io/tree/master/",
          // Sort only the "My Research" category in descending order.
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const items = await defaultSidebarItemsGenerator(args);
            const docsById = new Map(args.docs.map((doc) => [doc.id, doc]));

            const getBaseKey = (item) => {
              const key =
                item.type === "doc" ? item.id : (item.label ?? "");
              return key.split("/").pop() ?? key;
            };

            const getDocSourcePath = (source) => {
              if (source.startsWith("@site/")) {
                return path.join(process.cwd(), source.replace("@site/", ""));
              }
              return path.isAbsolute(source)
                ? source
                : path.join(process.cwd(), source);
            };

            const getCardImageFromFrontMatter = (doc) => {
              const image = doc.frontMatter?.image;
              if (typeof image !== "string" || image.length === 0) {
                return undefined;
              }

              // Already web-ready (absolute URL or base-url rooted path).
              if (/^https?:\/\//i.test(image) || image.startsWith("/")) {
                return image;
              }

              const sourcePath = getDocSourcePath(doc.source);
              const imagePath = path.resolve(path.dirname(sourcePath), image);
              if (!fs.existsSync(imagePath)) {
                return undefined;
              }

              // Copy doc-local images to static so cards can use stable URLs.
              const extension = path.extname(imagePath);
              const safeId = doc.id.replace(/[^a-zA-Z0-9_-]/g, "-");
              const relativeStaticPath = `img/doc-cards/${safeId}${extension}`;
              const absoluteStaticPath = path.join(
                process.cwd(),
                "static",
                relativeStaticPath,
              );

              fs.mkdirSync(path.dirname(absoluteStaticPath), { recursive: true });
              fs.copyFileSync(imagePath, absoluteStaticPath);

              return `/${relativeStaticPath}`;
            };

            const processCategory = (cat) => {
              if (cat.type !== "category" || !Array.isArray(cat.items)) return;

              // Match the category created from docs/my-research/_category_.json
              if (cat.label === "My Research") {
                cat.items = cat.items.slice().sort((a, b) => {
                  const aKey = getBaseKey(a);
                  const bKey = getBaseKey(b);
                  // Descending: newest (lexicographically larger) first
                  return bKey.localeCompare(aKey, undefined, {
                    numeric: true,
                    sensitivity: "base",
                  });
                });
              }

              // Recurse into subcategories and attach doc card images.
              cat.items.forEach((child) => {
                if (child.type === "category") {
                  processCategory(child);
                  return;
                }

                if (child.type !== "doc" && child.type !== "ref") {
                  return;
                }

                const doc = docsById.get(child.id);
                const cardImage = doc && getCardImageFromFrontMatter(doc);
                if (!cardImage) {
                  return;
                }

                child.customProps = {
                  ...(child.customProps ?? {}),
                  cardImage,
                };
              });
            };

            items.forEach((root) => {
              if (root.type === "category") processCategory(root);
            });

            return items;
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/FedericoTartarini/FedericoTartarini.github.io/tree/master/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/website-card.png",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "About Me",
            className: "desktop-only-nav",
          },
          { to: "/docs/category/about-me", label: "About Me", position: "left", className: "mobile-only-nav" },

          { to: "/docs/category/my-research", label: "My Research", position: "left", className: "mobile-only-nav" },
          { to: "/docs/category/my-research", label: "My Research", position: "left", className: "desktop-only-nav" },
          { to: "/docs/category/tools", label: "Tools", position: "left", className: "mobile-only-nav" },
          { to: "/docs/category/tools", label: "Tools", position: "left", className: "desktop-only-nav" },
          { to: "/docs/category/latex", label: "LaTeX", position: "left", className: "mobile-only-nav" },
          { to: "/docs/category/latex", label: "LaTeX", position: "left", className: "desktop-only-nav" },
          { to: "/blog", label: "Blog", position: "left", className: "mobile-only-nav" },
          { to: "/blog", label: "Blog", position: "left", className: "desktop-only-nav" },
          {
            to: "/docs/category/collaborating-with-me",
            label: "Collaborating with Me",
            position: "left",
            className: "mobile-only-nav",
          },
          {
            href: "https://github.com/FedericoTartarini",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          {
            className: "navbar__youtube navbar__icon",
            "aria-label": "YouTube channel",
            position: "right",
            href: "https://www.youtube.com/c/FedericoTartarini",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [
              {
                label: "My Work",
                to: "docs/about_me/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/federico-tartarini/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/c/FedericoTartarini",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/FedericoTartar1",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/FedericoTartarini",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Federico Tartarini. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["latex"],
      },
    }),
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

export default config;
