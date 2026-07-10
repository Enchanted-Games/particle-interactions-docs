<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";
import ParticleLayersFormat from "./ParticleLayersFormat.vue";

const props = defineProps(commonProps("[html]<i>Sprites Texture Config Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="list" name="sprites" desc="List of sprites to use for the particle" />
    <TreeField icon="identifier" name="atlas" desc="[html]Optional, defaults to <code>minecraft:particles</code>. Which <a href='https://minecraft.wiki/w/Atlas#List_of_atlases' target='_blank'>texture atlas</a> to use for the sprites" />
    <TreeField icon="string" name="sprite_cycle_mode" desc="[html]Optional, defaults to <code>random_on_spawn</code>. Can be one of the following: <code>random_on_spawn</code>, <code>random_per_tick</code>, or <code>age_cycle</code>" />
    <ParticleLayersFormat name="layer"></ParticleLayersFormat>
  </TreeGroup>
</template>
