import { SidebarType } from "@viteplus/versions";

export const latest: string = "v0.10.0";

export const sidebars: SidebarType = {
  // root used for latest version and default for versions without a custom navbar
  root: [
    {
      items: [
        { text: "About", link: "/about" },
        { text: "Current Features", link: "/mod-features" },
      ],
    },
    {
      text: "Resourcepack Docs",
      items: [{ text: "Introduction", link: "rp/introduction" }],
    },
  ],
};
