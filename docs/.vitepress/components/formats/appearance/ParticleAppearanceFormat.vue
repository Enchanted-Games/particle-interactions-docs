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
    <SpinConfigFormat name="spin_config" desc="Optional, defaults to no rotation. Defines how the particle model should rotate"></SpinConfigFormat>
    <FloatProviderFormat name="scale" desc="[html]Optional, defaults to <code>3</code>. The initial scale of the particle in pixels."></FloatProviderFormat>
    <Vector3Format
      name="model_offset"
      desc="[html]Optional, defaults to <code>[0, 0, 0]</code>. The offset of the particle model in 'model space'. See <a href='/rp/particle-appearances#model-offset'>Model offset</a> for more into. Only works with the <code>simple</code> particle behaviour type."></Vector3Format>
    <UVProviderFormat name="uv" desc="[html]Optional, defaults to displaying the full sprite. A UV provider for the particle. Only works with the <code>simple</code> and <code>spark_shape</code> particle behaviour type."></UVProviderFormat>
    <TreeGroup name="facing_camera_mode" desc="Optional, defaults to matching the camera rotation like most vanilla particles. Controls particle billboarding">
      <TreeField
        name="pitch"
        icon="string|float"
        desc="[html]Optional, defaults to <code>0</code>. Controls the pitch rotation of the particle. Can be either an angle in degrees, or a <a href='/rp/particle-appearances#facing-camera-mode-variables'>facing camera mode variable</a>"></TreeField>
      <TreeField
        name="yaw"
        icon="string|float"
        desc="[html]Optional, defaults to <code>0</code>. Controls the yaw rotation of the particle. Can be either an angle in degrees, or a <a href='/rp/particle-appearances#facing-camera-mode-variables'>facing camera mode variable</a>"></TreeField>
    </TreeGroup>
    <TreeGroup icon="list" name="events" desc="[html]Optional, defaults to an empty list (no events). A list of appearance events">
      <EventFormat name="" desc="An appearance event"></EventFormat>
    </TreeGroup>
  </TreeGroup>
</template>
