<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Single Biome Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="identifier" name="<biome id>" desc="Biome id to test for. This field accepts ids that may not actually exist" />
  </TreeGroup>
</template>
