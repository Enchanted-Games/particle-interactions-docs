<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Integer Provider</i>"));
const actualDesc = (props.desc == undefined ? "" : props.desc + " ") + "Accepts a single integer or an object with either of the following fields";
</script>

<template>
  <TreeGroup icon="int|object" :colour="props.colour" :name="props.name" :desc="actualDesc">
    <TreeField icon="list" name="range" desc="A list of exactly 2 integers, the first being a minimum value and second being maximum value. A random number is chosen between the min and max (inclusive)."></TreeField>
    <TreeField icon="list" name="values" desc="A list of at least 1 integer. A random entry is chosen from this list."></TreeField>
  </TreeGroup>
</template>
