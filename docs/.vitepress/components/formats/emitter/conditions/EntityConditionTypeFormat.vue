<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Biome State Predicate Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <EntityPredicateFormat name="predicate" desc="An entity type predicate"></EntityPredicateFormat>
  </TreeGroup>
</template>
