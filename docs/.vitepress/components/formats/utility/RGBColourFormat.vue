<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>ARGB Colour</i>"));
const actualDesc = props.desc == undefined ? "" : props.desc;
</script>

<template>
  <TreeField icon="string" :colour="props.colour" :name="props.name" :desc="'[html]Hex code format, an RGB or ARGB hex code prefixed with a <code>#</code>. For example, <code>#ff0000</code> for red. ' + actualDesc"></TreeField>
  <TreeGroup icon="list" :colour="props.colour" :name="props.name" :desc="'[html]ARGB list format, a list of exactly 4 <code>0-255</code> integer values. For example, <code>[127, 255, 0, 0]</code> for translucent red. ' + actualDesc"></TreeGroup>
</template>
