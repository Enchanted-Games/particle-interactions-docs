<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Particle Layer</i>"));
</script>

<template>
  <TreeField
    icon="string"
    :name="props.name"
    desc="[html]Optional, defaults to <code>cutout</code>. Controls translucency and whether the back face should be rendered for the particle. Can be one of the following: <code>cutout</code>, <code>translucent</code>, <code>cutout_backface</code>, or <code>translucent_backface</code>" />
</template>
