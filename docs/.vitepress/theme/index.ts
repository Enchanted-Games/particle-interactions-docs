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

import ParticleAppearanceFormat from "../components/formats/appearance/ParticleAppearanceFormat.vue";

import TextureConfigFormat from "../components/formats/appearance/texture/TextureConfigFormat.vue";
import SpritesTextureConfigFormat from "../components/formats/appearance/texture/SpritesTextureConfigFormat.vue";
import BlockTextureConfigFormat from "../components/formats/appearance/texture/BlockTextureConfigFormat.vue";
import FluidTextureConfigFormat from "../components/formats/appearance/texture/FluidTextureConfigFormat.vue";

import ColourSourceFormat from "../components/formats/appearance/colour/ColourSourceFormat.vue";
import ConstantColourSourceFormat from "../components/formats/appearance/colour/ConstantColourSourceFormat.vue";
import BlockTextureColourSourceFormat from "../components/formats/appearance/colour/BlockTextureColourSourceFormat.vue";
import BlockTintColourSourceFormat from "../components/formats/appearance/colour/BlockTintColourSourceFormat.vue";
import FluidTextureColourSourceFormat from "../components/formats/appearance/colour/FluidTextureColourSourceFormat.vue";
import FluidTintColourSourceFormat from "../components/formats/appearance/colour/FluidTintColourSourceFormat.vue";
import VariableColourSourceFormat from "../components/formats/appearance/colour/VariableColourSourceFormat.vue";
import RedstonePowerColourSourceFormat from "../components/formats/appearance/colour/RedstonePowerColourSourceFormat.vue";

import UVProviderFormat from "../components/formats/appearance/uv/UVProviderFormat.vue";
import SimpleUVProviderFormat from "../components/formats/appearance/uv/SimpleUVProviderFormat.vue";
import RandomUVProviderFormat from "../components/formats/appearance/uv/RandomUVProviderFormat.vue";

import BlockPaletteOverrideFormat from "../components/formats/palettes/BlockPaletteOverrideFormat.vue";
import FluidPaletteOverrideFormat from "../components/formats/palettes/FluidPaletteOverrideFormat.vue";
import StaticPaletteTypeFormat from "../components/formats/palettes/types/StaticPaletteTypeFormat.vue";
import TexturePaletteTypeFormat from "../components/formats/palettes/types/TexturePaletteTypeFormat.vue";

import FloatProviderFormat from "../components/formats/utility/FloatProviderFormat.vue";
import IntProviderFormat from "../components/formats/utility/IntProviderFormat.vue";
import RGBColourFormat from "../components/formats/utility/RGBColourFormat.vue";
import FluidTextureTypeFormat from "../components/formats/utility/FluidTextureTypeFormat.vue";
import Vector3Format from "../components/formats/utility/Vector3Format.vue";

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

    app.component("ParticleAppearanceFormat", ParticleAppearanceFormat);

    app.component("TextureConfigFormat", TextureConfigFormat);
    app.component("SpritesTextureConfigFormat", SpritesTextureConfigFormat);
    app.component("BlockTextureConfigFormat", BlockTextureConfigFormat);
    app.component("FluidTextureConfigFormat", FluidTextureConfigFormat);

    app.component("ColourSourceFormat", ColourSourceFormat);
    app.component("ConstantColourSourceFormat", ConstantColourSourceFormat);
    app.component("BlockTextureColourSourceFormat", BlockTextureColourSourceFormat);
    app.component("BlockTintColourSourceFormat", BlockTintColourSourceFormat);
    app.component("FluidTextureColourSourceFormat", FluidTextureColourSourceFormat);
    app.component("FluidTintColourSourceFormat", FluidTintColourSourceFormat);
    app.component("VariableColourSourceFormat", VariableColourSourceFormat);
    app.component("RedstonePowerColourSourceFormat", RedstonePowerColourSourceFormat);

    app.component("UVProviderFormat", UVProviderFormat);
    app.component("SimpleUVProviderFormat", SimpleUVProviderFormat);
    app.component("RandomUVProviderFormat", RandomUVProviderFormat);

    app.component("BlockPaletteOverrideFormat", BlockPaletteOverrideFormat);
    app.component("FluidPaletteOverrideFormat", FluidPaletteOverrideFormat);
    app.component("StaticPaletteTypeFormat", StaticPaletteTypeFormat);
    app.component("TexturePaletteTypeFormat", TexturePaletteTypeFormat);

    app.component("FloatProviderFormat", FloatProviderFormat);
    app.component("IntProviderFormat", IntProviderFormat);
    app.component("RGBColourFormat", RGBColourFormat);
    app.component("FluidTextureTypeFormat", FluidTextureTypeFormat);
    app.component("Vector3Format", Vector3Format);
  },
} satisfies Theme;
