<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Float Range</i>"));
const actualDesc = "A list of exactly 2 floats, the first being a minimum value and second being maximum value." + (props.desc == undefined ? "" : " " + props.desc);
</script>

<template>
  <TreeField icon="list" :colour="props.colour" :name="props.name" :desc="actualDesc"></TreeField>
</template>
