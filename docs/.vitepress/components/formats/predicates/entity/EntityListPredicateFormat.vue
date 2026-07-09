<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Entity List Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="entities" desc="" />
    <EntityListFormat :compact="true" name="entities" desc="List of entity type or entity type tag ids" />
  </TreeGroup>
</template>
