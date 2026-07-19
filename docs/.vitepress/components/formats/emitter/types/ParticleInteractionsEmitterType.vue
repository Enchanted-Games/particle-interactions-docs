<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";
import ComponentMapField from "../../particle-components/ComponentMapField.vue";

const props = defineProps(commonProps("[html]<i>Particle Interactions Emitter Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3Format :compact="true" name="velocity_multiplier" desc="Optional."></Vector3Format>
    <Vector3Format name="position_offset" desc="Optional, offsets where the particle is emitted from"></Vector3Format>
    <TreeField icon="particle-interactions-id" name="particle" desc="[html]The id of a <a href='/rp/particle-definitions'>Particle Definition</a> to emit"></TreeField>
    <ComponentMapField name="components" desc="Optional, additional components to apply to the particle. Components specified here take priority over the same components in the particle definition."></ComponentMapField>
  </TreeGroup>
</template>
