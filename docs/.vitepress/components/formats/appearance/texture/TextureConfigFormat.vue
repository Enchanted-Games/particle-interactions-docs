<script setup lang="ts">
import { commonProps } from "../../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Texture Config</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeField
      icon="particle-interactions-id"
      name="type"
      desc="[html]Optional, defaults to <code>sprites</code>. The type of texture config to use, see <a href='/rp/particle-appearances#texture-config-types'>Texture Config Types</a> for more info" />
    <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the texture config type specified" />
  </TreeGroup>
</template>
