<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";
import ComponentMapField from "../../particle-components/ComponentMapField.vue";

const props = defineProps(commonProps("[html]<i>Random Emitter Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup name="emitters" desc="A list of emitters and weights" icon="list">
      <TreeGroup name="" desc="Emitter and weight">
        <ParticleEmitterFormat name="emitter" desc="The emitter to use"></ParticleEmitterFormat>
        <TreeField name="weight" desc="[html]An integer value of at least <code>0</code>" icon="int"></TreeField>
      </TreeGroup>
    </TreeGroup>
  </TreeGroup>
</template>
