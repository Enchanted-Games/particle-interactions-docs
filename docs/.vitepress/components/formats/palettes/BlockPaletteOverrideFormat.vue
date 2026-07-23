<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const props = defineProps(commonProps("[html]<i>Block Palette Override</i>"));
</script>

<template>
  <TreeGroup :colour="props.colour" :name="props.name" :desc="props.desc">
    <TreeGroup name="default" desc="Default palette to use if no rules pass">
      <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of pallette to use, see <a href='/rp/palette-overrides#palette-types'>Palette Types</a> for more info" />
      <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the palette type specified" />
    </TreeGroup>
    <TreeGroup icon="list" name="rules" desc="Optional. List of rules, a rule is made up of a block state predicate and palette type to use if the predicate passes.">
      <TreeGroup desc="a rule.">
        <BlockStatePredicateFormat :showid="false" name="block_state_predicate"></BlockStatePredicateFormat>
        <TreeGroup name="palette">
          <TreeField icon="particle-interactions-id" name="type" desc="[html]The type of palette to use, see <a href='/rp/palette-overrides#palette-types'>Palette Types</a> for more info" />
          <TreeField icon="any" name="<type specific fields>" desc="Any additional fields for the palette type specified" />
        </TreeGroup>
      </TreeGroup>
    </TreeGroup>
  </TreeGroup>
</template>
