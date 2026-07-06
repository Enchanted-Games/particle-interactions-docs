// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import VersionSwitcher from "@viteplus/versions/components/version-switcher.component.vue";
import Preview from "../components/Preview.vue";
import TreeGroup from "../components/TreeGroup.vue";
import TreeField from "../components/TreeField.vue";
import ParticleOverrideFormat from "../components/formats/ParticleOverrideFormat.vue";
import ParticleEmitterFormat from "../components/formats/ParticleEmitterFormat.vue";
import ParticleEmitterRuleFormat from "../components/formats/ParticleEmitterRuleFormat.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("VersionSwitcher", VersionSwitcher);
    app.component("Preview", Preview);
    app.component("TreeGroup", TreeGroup);
    app.component("TreeField", TreeField);
    app.component("ParticleOverrideFormat", ParticleOverrideFormat);
    app.component("ParticleEmitterFormat", ParticleEmitterFormat);
    app.component("ParticleEmitterRuleFormat", ParticleEmitterRuleFormat);
  },
} satisfies Theme;
