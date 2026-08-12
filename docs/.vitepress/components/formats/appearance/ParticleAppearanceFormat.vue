<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";
import SpinConfigFormat from "./SpinConfigFormat.vue";

const props = defineProps(commonProps("[html]<i>Particle Appearance</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TextureConfigFormat name="texture_config"></TextureConfigFormat>
    <ColourSourceFormat name="colour" desc="Optional, defaults to a constant white colour (effectively no tint). A colour source to tint this particle with"></ColourSourceFormat>
    <TreeField name="light_emission" desc="[html]Optional, defaults to <code>0</code>. An int between <code>0</code> and <code>15</code> (inclusive). The minimum light value the particle can be"></TreeField>
    <SpinConfigFormat name="spin_config" desc="Optional. Defines how the particle model should rotate"></SpinConfigFormat>
    <FloatProviderFormat name="scale" desc="The initial scale of the particle in pixels."></FloatProviderFormat>
    <Vector3Format
      name="model_offset"
      desc="The offset of the particle model in 'model space'. See <a href='/rp/particle-appearances#model-offset'>Model offset</a> for more into. Only works with the <code>simple</code> particle behaviour type."></Vector3Format>
    <UVProviderFormat name="uv" desc="[html]A UV provider for the particle. Only works with the <code>simple</code> and <code>spark_shape</code> particle behaviour type."></UVProviderFormat>
    <TreeGroup icon="list" name="events" desc="[html]A list of appearance events">
      <EventFormat name="" desc="An appearance event"></EventFormat>
    </TreeGroup>
  </TreeGroup>
</template>
