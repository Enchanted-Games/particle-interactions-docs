<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Fluid List Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="fluids" desc="Fluid list id" />
    <FluidListFormat :compact="true" name="fluids" desc="List of fluid or fluid tag ids" />
  </TreeGroup>
</template>
