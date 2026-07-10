<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";
import ParticleLayersFormat from "./ParticleLayersFormat.vue";

const props = defineProps(commonProps("[html]<i>Fluid Texture Config Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="list" name="fallback_sprites" desc="List of sprites to use for the particle" />
    <TreeField icon="identifier" name="fallback_atlas" desc="[html]Optional, defaults to <code>minecraft:particles</code>. Which <a href='https://minecraft.wiki/w/Atlas#List_of_atlases' target='_blank'>texture atlas</a> to use for the sprites" />
    <ParticleLayersFormat name="layer"></ParticleLayersFormat>
    <FluidTextureTypeFormat name="texture_type"></FluidTextureTypeFormat>
  </TreeGroup>
</template>
