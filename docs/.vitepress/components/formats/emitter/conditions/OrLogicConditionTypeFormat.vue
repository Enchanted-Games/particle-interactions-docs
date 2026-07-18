<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Or Logic Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup icon="list" name="conditions" desc="A list of emitter conditions.">
      <EmitterConditionFormat name="" desc="A condition."></EmitterConditionFormat>
    </TreeGroup>
  </TreeGroup>
</template>
