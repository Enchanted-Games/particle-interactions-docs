<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Simple UV Provider Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField
      icon="list"
      name="coordinates"
      desc="[html]List of exactly 4 float values between <code>0</code> and <code>1</code> (inclusive). The first two values are the uv for the top left corner, and second two values are the bottom right corner." />
  </TreeGroup>
</template>
