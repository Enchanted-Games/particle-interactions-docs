<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Static Palette Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup icon="list" name="colours" desc="A list of RGB colours to use for the palette.">
      <RGBColourFormat></RGBColourFormat>
    </TreeGroup>
  </TreeGroup>
</template>
