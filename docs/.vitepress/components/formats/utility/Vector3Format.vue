<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(
  commonProps("[html]<i>3 Component Vector</i>", {
    compact: {
      type: Boolean,
      required: false,
      default: false,
    },
  }),
) as any;

const d = props.compact ? "[html]A 3 component vector or a float. Vector format: list of exactly 3 floats in the order [x, y, z]. " : "[html]A 3 component vector, list of exactly 3 floats in the order [x, y, z]. ";

const actualDesc = d + (props.desc == undefined ? "" : props.desc);
</script>

<template>
  <TreeGroup :icon="props.compact ? 'list|float' : 'list'" :colour="props.colour" :name="props.name" :desc="actualDesc"> </TreeGroup>
</template>
