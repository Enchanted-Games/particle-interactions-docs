<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Raw Light Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3iFormat name="position_offset" desc="Optional. Checks the light level at a different position in the world."></Vector3iFormat>
    <TreeField icon="int" name="min" desc="[html]Must be any value between <code>0</code> and <code>15</code> (inclusive)"></TreeField>
    <TreeField icon="int" name="max" desc="[html]Must be any value between <code>0</code> and <code>15</code> (inclusive)"></TreeField>
  </TreeGroup>
</template>
