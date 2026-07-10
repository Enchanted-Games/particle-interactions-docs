<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Block Texture Colour Source Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="int" name="tint_index" desc="[html]Optional, defaults to <code>-1</code> (no tint index). If set to <code>0</code> or higher, the block palette is multiplied with the tint index specified."></TreeField>
    <RGBColourFormat name="fallback" desc="Optional, used if the particle was not spawned with a block context"></RGBColourFormat>
  </TreeGroup>
</template>
