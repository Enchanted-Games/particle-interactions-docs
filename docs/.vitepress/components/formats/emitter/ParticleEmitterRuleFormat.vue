<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Emitter Rule</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup name="rules" icon="list" desc="Optional. A list of emitter rules. An emitter rule is made up of a condition and emitter to use if the condition passes">
      <TreeGroup desc="a rule." icon="object">
        <EmitterConditionFormat name="condition"></EmitterConditionFormat>
        <ParticleEmitterFormat name="emitter" icon="object" desc="Emitter to use if this rule passes" />
      </TreeGroup>
    </TreeGroup>
    <ParticleEmitterFormat name="fallback_emitter" desc="The emitter to use when no rules pass" />
  </TreeGroup>
</template>
