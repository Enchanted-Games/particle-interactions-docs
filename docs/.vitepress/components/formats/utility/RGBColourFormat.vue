<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>RGB Colour</i>"));
const actualDesc = props.desc == undefined ? "" : props.desc;
</script>

<template>
  <TreeField
    icon="string|list"
    :colour="props.colour"
    :name="props.name"
    :desc="
      '[html]Hex colour code or ARGB list. Hex code format: an RGB or ARGB hex code prefixed with a <code>#</code>, for example <code>#ff0000</code> for red. ARGB list format: a list of exactly 4 <code>0-255</code> integer values, for example <code>[127, 255, 0, 0]</code> for translucent red. ' +
      actualDesc
    "></TreeField>
</template>
