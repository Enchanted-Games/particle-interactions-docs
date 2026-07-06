<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "[html]<i>Particle Emitter</i>",
  },
  desc: {
    type: String,
    required: false,
  },
  colour: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of emitter to use, see <a href='/rp/particle-emitters#emitter-types'>Emitter Types</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the emitter type specified" />
  </TreeGroup>
</template>
