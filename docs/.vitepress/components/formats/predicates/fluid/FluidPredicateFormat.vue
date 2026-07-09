<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Fluid Predicate</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of predicate to use, see <a href='/rp/object-predicates#fluid-predicates'>Fluid Predicates</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the predicate type specified" />
  </TreeGroup>
</template>
