<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Emitter Condition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="type" desc="[html]A condition type, see <a href='/rp/particle-emitters#condition-types'>Condition Types</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the condition type specified" />
  </TreeGroup>
</template>
