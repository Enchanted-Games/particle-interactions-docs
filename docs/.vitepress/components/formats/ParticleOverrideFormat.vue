<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "[html]<i>Particle Override</i>",
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
    <TreeGroup name="emitters" desc="[html]A map of particle origin to a particle emitter or emitter rule. See <a href='rp/particle-origins'>Particle Origins</a> for a list of particle origins">
      <ParticleEmitterFormat colour="var(--tree-group-accent-bg)" name="<particle origin>" desc="emitter format." />
      <TreeGroup icon="particle-interactions-id" name="<particle origin>" desc="identifier format. A particle interactions identifier pointing to an emitter rule file"> </TreeGroup>
      <ParticleEmitterRuleFormat colour="var(--tree-group-accent-bg)" name="<particle origin>" desc="emitter rule format." />
    </TreeGroup>
  </TreeGroup>
</template>
