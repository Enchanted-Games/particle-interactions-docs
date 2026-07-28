<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Integer Math Modifier</i>"));
</script>

<template>
  <TreeGroup icon="object" :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="int" name="divide" desc="Optional. Divides the value by the specified number."></TreeField>
    <TreeField icon="int" name="multiply" desc="Optional. Multiplies the value by the specified number."></TreeField>
    <TreeField icon="int" name="add" desc="Optional. Adds the specified number to the value."></TreeField>
    <TreeField icon="int" name="subtract" desc="Optional. Subtracts the specified number to the value."></TreeField>
    <IntRangeFormat name="clamp" desc="Optional. If specified, clamps the final value in this range."></IntRangeFormat>
  </TreeGroup>
</template>
