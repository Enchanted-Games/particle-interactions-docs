<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>UV Provider</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of uv provider to use, see <a href='/rp/particle-appearances#uv-provider-types'>UV Provider Types</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the uv provider type specified" />
  </TreeGroup>
</template>
