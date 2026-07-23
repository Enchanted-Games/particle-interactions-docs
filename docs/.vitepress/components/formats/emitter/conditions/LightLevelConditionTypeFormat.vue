<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Light Level Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3iFormat name="position_offset" desc="Optional. Checks the light level at a different position in the world."></Vector3iFormat>
    <TreeGroup name="sky" desc="Optional, inclusive range. If specified, the sky light value must be included in this range for the condition to pass.">
      <TreeField icon="int" name="min" desc="[html]Must be any value between <code>0</code> and <code>15</code> (inclusive)"></TreeField>
      <TreeField icon="int" name="max" desc="[html]Must be any value between <code>0</code> and <code>15</code> (inclusive)"></TreeField>
    </TreeGroup>
    <TreeGroup name="block" desc="Optional, inclusive range. If specified, the block light value must be included in this range for the condition to pass.">
      <TreeField icon="int" name="min" desc="[html]Must be any value between <code>0</code> and <code>15</code> (inclusive)"></TreeField>
      <TreeField icon="int" name="max" desc="[html]Must be any value between <code>0</code> and <code>15</code> (inclusive)"></TreeField>
    </TreeGroup>
  </TreeGroup>
</template>
