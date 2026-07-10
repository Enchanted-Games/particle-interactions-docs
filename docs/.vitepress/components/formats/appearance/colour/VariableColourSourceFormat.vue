<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Variable Colour Source Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <RGBColourFormat name="base_colour"></RGBColourFormat>
    <TreeField
      icon="bool"
      name="uniform"
      desc="[html]Optional, defaults to <code>true</code>. If set to true, all colour channels are randomised by the same random amount. If set to false, each channel is randomised by a different random value."></TreeField>
    <TreeField icon="float" name="variation" desc="[html]A float between <code>0</code> and <code>1</code> (inclusive). A random value is generated between <code>0</code> and this value, then subtracted from each colour channel."></TreeField>
  </TreeGroup>
</template>
