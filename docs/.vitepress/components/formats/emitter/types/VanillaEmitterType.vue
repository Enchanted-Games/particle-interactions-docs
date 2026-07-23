<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Vanilla Emitter Type</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <Vector3Format :compact="true" name="velocity_multiplier" desc="Optional."></Vector3Format>
    <Vector3Format name="position_offset" desc="Optional, offsets where the particle is emitted from"></Vector3Format>
    <TreeGroup icon="object" name="particle" desc="A particle type to emit">
      <TreeField
        icon="identifier"
        name="type"
        desc="[html]A particle type id. Must be a valid registerred particle type. You can see a list of these in-game using the <code>/particle</code> command and looking at the autocomplete suggestions, alternatively all vanilla particles are listed on <a target='_blank' href='https://minecraft.wiki/w/Particles#Types_of_particles'>this wiki page</a>."></TreeField>
      <TreeField
        icon="any"
        name="<type specific fields>"
        desc="[html]Optional. Type-specific fields if required by the particle type. See <a target='_blank' href='https://minecraft.wiki/w/Particle_format'>this wiki page</a> for more info"></TreeField>
    </TreeGroup>
  </TreeGroup>
</template>
