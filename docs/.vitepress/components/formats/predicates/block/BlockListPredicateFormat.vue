<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Block List Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="blocks" desc="Block list id" />
    <BlockListFormat :compact="true" name="blocks" desc="List of block or block tag ids" />
  </TreeGroup>
</template>
