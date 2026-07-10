<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Colour Source</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of colour source to use, see <a href='/rp/particle-appearances#colour-source-types'>Colour Source Types</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the colour source type specified" />
  </TreeGroup>
</template>
