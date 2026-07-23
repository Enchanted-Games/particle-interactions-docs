<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Fluid State Predicate Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3iFormat name="position_offset" desc="Optional. Runs the predicate at a different position in the world."></Vector3iFormat>
    <FluidPredicateFormat name="predicate" desc="A fluid state predicate"></FluidPredicateFormat>
  </TreeGroup>
</template>
