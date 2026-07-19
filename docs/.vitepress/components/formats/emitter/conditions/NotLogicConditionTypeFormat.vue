<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Not Logic Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <EmitterConditionFormat name="condition" desc="A condition."></EmitterConditionFormat>
  </TreeGroup>
</template>
