<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Biome List Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="biomes" desc="" />
    <BiomeListFormat :compact="true" name="biomes" desc="List of biomes or biome tag ids" />
  </TreeGroup>
</template>
