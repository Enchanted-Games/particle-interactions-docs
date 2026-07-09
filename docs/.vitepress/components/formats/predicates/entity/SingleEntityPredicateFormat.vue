<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Single Entity Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="identifier" name="<entity type id>" desc="Entity type id to test for. This field accepts ids that may not actually exist" />
  </TreeGroup>
</template>
