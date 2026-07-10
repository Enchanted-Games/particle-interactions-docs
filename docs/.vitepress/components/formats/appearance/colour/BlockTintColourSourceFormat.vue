<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Block Tint Colour Source Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="int" name="tint_index" desc="[html]Optional, defaults to <code>0</code>. The tint index to use from the current block state."></TreeField>
    <RGBColourFormat name="fallback" desc="Optional, used if the particle was not spawned with a block context"></RGBColourFormat>
  </TreeGroup>
</template>
