<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(
  commonProps("[html]<i>Block State Predicate</i>", {
    showid: {
      type: Boolean,
      required: false,
      default: true,
    },
  }) as any,
);
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField v-if="props.showid" icon="identifier" name="<block id>" desc="Optional. A block id, must be a valid registerred block" />
    <TreeGroup icon="object" name="properties" desc="Optional. Block state properties to test for">
      <TreeField icon="string" name="<property name>" desc="A blockstate property name and value to test for" />
    </TreeGroup>
  </TreeGroup>
</template>
