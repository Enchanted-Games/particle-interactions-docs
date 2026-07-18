<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Integer Provider</i>"));
const actualDesc = "[html]A 3 int component vector, list of exactly 3 ints in the order [x, y, z]. " + (props.desc == undefined ? "" : props.desc);
</script>

<template>
  <TreeGroup icon="list" :colour="props.colour" :name="props.name" :desc="actualDesc"> </TreeGroup>
</template>
