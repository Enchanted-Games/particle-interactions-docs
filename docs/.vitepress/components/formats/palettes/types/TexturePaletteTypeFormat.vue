<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Texture Palette Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="identifier" name="texture" desc="A sprite to generate a palette from." />
    <TreeField icon="identifier" name="atlas" desc="[html]Optional, defaults to <code>minecraft:blocks</code>. Which <a href='https://minecraft.wiki/w/Atlas#List_of_atlases' target='_blank'>texture atlas</a> to get the sprite from" />
  </TreeGroup>
</template>
