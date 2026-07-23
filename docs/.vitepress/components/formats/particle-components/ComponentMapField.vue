<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Component Map</i>"));

const actualDesc = props.desc == undefined ? "" : props.desc;
</script>

<template>
  <TreeField :colour="props.colour" icon="object" :name="props.name" :desc="'[html]A map of particle components, see <a href=\'/rp/particle-definitions#particle-components\'>Particle Components</a> for more info. ' + actualDesc" />
</template>
