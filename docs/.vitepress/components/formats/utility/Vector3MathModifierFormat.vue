<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Float Math Modifier</i>"));
</script>

<template>
  <TreeGroup icon="object" :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3Format name="divide" desc="Optional. Divides the value by the specified number."></Vector3Format>
    <Vector3Format name="multiply" desc="Optional. Multiplies the value by the specified number."></Vector3Format>
    <Vector3Format name="add" desc="Optional. Adds the specified number to the value."></Vector3Format>
    <Vector3Format name="subtract" desc="Optional. Subtracts the specified number to the value."></Vector3Format>
    <TreeGroup name="clamp" icon="list" desc="Optional. A list of exactly 3 ranges to clamp each component of the modified vector between.">
      <FloatRangeFormat name="A range."></FloatRangeFormat>
    </TreeGroup>
  </TreeGroup>
</template>
