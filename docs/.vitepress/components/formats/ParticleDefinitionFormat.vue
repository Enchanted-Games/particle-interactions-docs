<script setup lang="ts">
import { commonProps } from "../../util/CommonFormatComponentProps.ts";
import ComponentMapField from "./particle-components/ComponentMapField.vue";

const props = defineProps(commonProps("[html]<i>Particle Definition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <ComponentMapField name="components"></ComponentMapField>
    <TreeField icon="particle-interactions-id" name="behaviour" desc="[html]Optional. A hardcoded behaviour type to use, see <a href='/rp/particle-definitions#behaviour-types'>Behaviour Types</a> for more info" />
  </TreeGroup>
</template>
