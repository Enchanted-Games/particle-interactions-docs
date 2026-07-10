<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Variable Colour Source Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField
      icon="int"
      name="fallback_power"
      desc="[html]Optional, defaults to <code>15</code>. An int between <code>0</code> and <code>15</code> (inclusive), used if the current block doesn't have a redstone power level, is not a redstone component, or the particle was spawned with a non-block context."></TreeField>
  </TreeGroup>
</template>
