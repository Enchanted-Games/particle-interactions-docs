<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Appearance Event Format</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup name="trigger" desc="Event trigger">
      <TreeField icon="particle-interactions-id" name="type" desc="[html]An event trigger type, see <a href='/rp/events#event-trigger-types'>Event Trigger Types</a> for more info."> </TreeField>
      <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the event trigger type specified"></TreeField>
    </TreeGroup>
    <TreeGroup name="action" desc="Appearance action">
      <TreeField icon="particle-interactions-id" name="type" desc="[html]An appearance event action type, see <a href='/rp/events#appearance-action-types'>Appearance Action Types</a> for more info."> </TreeField>
      <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the action type specified"></TreeField>
    </TreeGroup>
  </TreeGroup>
</template>
