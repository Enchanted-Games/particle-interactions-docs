<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Emitter</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of emitter to use, see <a href='/rp/particle-emitters#emitter-types'>Emitter Types</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the emitter type specified" />
  </TreeGroup>
</template>
