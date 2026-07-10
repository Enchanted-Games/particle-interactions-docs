<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Appearance</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TextureConfigFormat name="texture_config"></TextureConfigFormat>
    <FloatProviderFormat name="scale" desc="The initial scale of the particle in pixels."></FloatProviderFormat>
    <ColourSourceFormat name="colour" desc="Optional, defaults to a constant white colour (effectively no tint). A colour source to tint this particle with"></ColourSourceFormat>
  </TreeGroup>
</template>
