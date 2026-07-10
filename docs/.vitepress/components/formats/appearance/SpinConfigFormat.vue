<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Spin Config</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <FloatProviderFormat name="initial_rotation" desc="[html]Optional, defaults to <code>0</code>. The initial rotation in degrees."></FloatProviderFormat>
    <FloatProviderFormat name="starting_speed" desc="[html]Optional, defaults to <code>0</code>. The initial rotation speed."></FloatProviderFormat>
    <FloatProviderFormat name="max_speed" desc="[html]Optional, defaults to <code>1</code>. The maximum rotation speed."></FloatProviderFormat>
    <FloatProviderFormat name="acceleration" desc="[html]Optional, defaults to <code>0</code>. How quickly the particle will reach its maximum rotation speed."></FloatProviderFormat>
  </TreeGroup>
</template>
