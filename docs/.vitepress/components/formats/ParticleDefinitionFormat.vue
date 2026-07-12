<script setup lang="ts">
import { commonProps } from "../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Definition</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="object" name="components" desc="[html]A map of particle components components, see <a href='/rp/particle-definitions#particle-components'>Particle Components</a> for more info" />
    <TreeField icon="particle-interactions-id" name="behaviour" desc="[html]Optional. A hardcoded behaviour type to use, see <a href='/rp/particle-definitions#behaviour-types'>Behaviour Types</a> for more info" />
  </TreeGroup>
</template>
