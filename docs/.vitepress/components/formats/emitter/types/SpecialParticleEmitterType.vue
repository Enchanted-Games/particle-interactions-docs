<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Special Particle Emitter Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3Format :compact="true" name="velocity_multiplier" desc="Optional."></Vector3Format>
    <Vector3Format name="position_offset" desc="Optional, offsets where the particle is emitted from"></Vector3Format>
    <TreeGroup icon="object" name="particle" desc="A special particle type to emit">
      <TreeField
        icon="particle-interactions-id"
        name="type"
        desc="[html]A special particle type id. Must be a valid registerred particle type, see <a href='/rp/particle-emitter-types#special-particle-types'>Special Particle Types</a> for more info."></TreeField>
      <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the special paticle type specified"></TreeField>
    </TreeGroup>
  </TreeGroup>
</template>
