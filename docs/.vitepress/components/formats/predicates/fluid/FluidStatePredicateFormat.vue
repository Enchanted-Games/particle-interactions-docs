<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Fluid State Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="identifier" name="<fluid id>" desc="Optional. A fluid id, must be a valid registerred fluid" />
    <TreeGroup icon="object" name="properties" desc="Optional. Fluid state properties to test for">
      <TreeField icon="string" name="<property name>" desc="A fluidstate property name and value to test for" />
    </TreeGroup>
  </TreeGroup>
</template>
