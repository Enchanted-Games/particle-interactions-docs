import { defineVersionedConfig } from "@viteplus/versions";
import { latest, sidebars } from "./versions.mjs";

export const githubPage: string = "https://github.com/Enchanted-Games/particle-interactions-docs";

// https://vitepress.dev/reference/site-config
export default defineVersionedConfig({
  title: "Particle Interactions Docs",
  description: "Documentation for the Particle Interactions Minecraft mod",

  // Version configuration
  versionsConfig: {
    current: latest,
    versionSwitcher: false,

    hooks: {
      rewritesHook: (source: string, version: string, locale: string) => {
        return `${version}/${source}`;
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: {
      root: [{ text: "Home", link: "/" }, { text: "Introduction", link: "/introduction" }, { text: "Resourcepack docs", link: "/resourcepack-introduction" }, { component: "VersionSwitcher" }],
    },

    search: {
      provider: "local",
    },

    sidebar: sidebars,

    socialLinks: [
      { icon: "github", ariaLabel: "github repository", link: githubPage },
      {
        icon: {
          svg: `
          <svg width="128" height="128" viewBox="0 0 128 128">
            <image width="128" height="128" xlink:href="https://enchanted.games/favicon.ico"/>
          </svg>
          `,
        },
        ariaLabel: "enchanted games' website",
        link: "https://enchanted.games",
      },
    ],

    footer: {
      message: "Not an official Minecraft product. Not approved by, associated with, or endorsed by Mojang or Microsoft.",
    },
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  ignoreDeadLinks: true,
});
