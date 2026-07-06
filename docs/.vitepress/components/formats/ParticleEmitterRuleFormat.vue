<script setup lang="ts">
import { commonProps } from "../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Emitter Rule</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup name="rules" icon="list" desc="A list of emitter rules. An emitter rule is made up of a condition and emitter to use if the condition passes">
      <TreeGroup desc="emitter rule." icon="object">
        <TreeGroup name="condition" icon="object">
          <TreeField icon="particle-interactions-id" name="type" desc="[html]A condition type, see <a href='/rp/particle-emitters#condition-types'>Condition Types</a> for more info" />
          <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the condition type specified" />
        </TreeGroup>
        <ParticleEmitterFormat name="emitter" icon="object" desc="Emitter to use if this rule passes" />
      </TreeGroup>
    </TreeGroup>
    <ParticleEmitterFormat name="fallback_emitter" desc="The emitter to use when no rules pass" />
  </TreeGroup>
</template>
