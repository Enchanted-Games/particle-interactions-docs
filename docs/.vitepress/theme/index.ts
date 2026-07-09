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

import BlockListFormat from "../components/formats/lists/BlockListFormat.vue";
import FluidListFormat from "../components/formats/lists/FluidListFormat.vue";
import BiomeListFormat from "../components/formats/lists/BiomeListFormat.vue";
import EntityListFormat from "../components/formats/lists/EntityListFormat.vue";

import BlockPredicateFormat from "../components/formats/predicates/block/BlockPredicateFormat.vue";
import BlockListPredicateFormat from "../components/formats/predicates/block/BlockListPredicateFormat.vue";
import BlockStatePredicateFormat from "../components/formats/predicates/block/BlockStatePredicateFormat.vue";

import FluidPredicateFormat from "../components/formats/predicates/fluid/FluidPredicateFormat.vue";
import FluidListPredicateFormat from "../components/formats/predicates/fluid/FluidListPredicateFormat.vue";
import FluidStatePredicateFormat from "../components/formats/predicates/fluid/FluidStatePredicateFormat.vue";

import BiomePredicateFormat from "../components/formats/predicates/biome/BiomePredicateFormat.vue";
import BiomeListPredicateFormat from "../components/formats/predicates/biome/BiomeListPredicateFormat.vue";
import SingleBiomePredicateFormat from "../components/formats/predicates/biome/SingleBiomePredicateFormat.vue";

import EntityPredicateFormat from "../components/formats/predicates/entity/EntityPredicateFormat.vue";
import EntityListPredicateFormat from "../components/formats/predicates/entity/EntityListPredicateFormat.vue";
import SingleEntityPredicateFormat from "../components/formats/predicates/entity/SingleEntityPredicateFormat.vue";

import ParticleDefinitionFormat from "../components/formats/ParticleDefinitionFormat.vue";

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

    app.component("BlockListFormat", BlockListFormat);
    app.component("FluidListFormat", FluidListFormat);
    app.component("BiomeListFormat", BiomeListFormat);
    app.component("EntityListFormat", EntityListFormat);

    app.component("BlockPredicateFormat", BlockPredicateFormat);
    app.component("BlockListPredicateFormat", BlockListPredicateFormat);
    app.component("BlockStatePredicateFormat", BlockStatePredicateFormat);

    app.component("FluidPredicateFormat", FluidPredicateFormat);
    app.component("FluidListPredicateFormat", FluidListPredicateFormat);
    app.component("FluidStatePredicateFormat", FluidStatePredicateFormat);

    app.component("BiomePredicateFormat", BiomePredicateFormat);
    app.component("BiomeListPredicateFormat", BiomeListPredicateFormat);
    app.component("SingleBiomePredicateFormat", SingleBiomePredicateFormat);

    app.component("EntityPredicateFormat", EntityPredicateFormat);
    app.component("EntityListPredicateFormat", EntityListPredicateFormat);
    app.component("SingleEntityPredicateFormat", SingleEntityPredicateFormat);

    app.component("ParticleDefinitionFormat", ParticleDefinitionFormat);
  },
} satisfies Theme;
