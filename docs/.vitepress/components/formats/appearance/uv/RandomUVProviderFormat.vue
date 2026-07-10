<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Random UV Provider Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="float" name="scale" desc="[html]Optional, defaults to <code>1</code>. A multiplier to apply to the current particle scale before calculating a random set of uv coordinates." />
  </TreeGroup>
</template>
