<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Fluid Texture Type</i>"));
</script>

<template>
  <TreeField icon="string" name="texture_type" desc="[html]Optional, defaults to <code>still</code>. Can be either <code>still</code> or <code>flowing</code> to use either the still or flowing texture of the fluid." />
</template>
