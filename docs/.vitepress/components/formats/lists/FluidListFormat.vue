<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const defaultName = "[html]<i>Fluid List</i>";
const defaultCompactName = "[html]<i>Compact Fluid List</i>";

const props = defineProps(
  commonProps(defaultName, {
    compact: {
      type: Boolean,
      required: false,
      default: false,
    },
  }),
);

const name = props.name === defaultName && props.compact ? defaultCompactName : props.name;
</script>

<template>
  <TreeGroup v-if="props.compact" icon="list" :colour="props.colour" :name="name" :desc="props.desc">
    <TreeField icon="identifier" name="<fluid id>" desc="A fluid id. This field accepts ids that may not actually exist" />
    <TreeField icon="identifier" name="<tag id>" desc="[html]A fluid tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
  </TreeGroup>
  <TreeGroup v-else :colour="props.colour" :name="name" :desc="props.desc">
    <TreeGroup icon="list" name="fluids" desc="Optional. List of fluid or fluid tag ids">
      <TreeField icon="identifier" name="<fluid id>" desc="A fluid id. This field accepts ids that may not actually exist" />
      <TreeField icon="identifier" name="<tag id>" desc="[html]A fluid tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
    </TreeGroup>
    <TreeGroup icon="list" name="fluid_states" desc="Optional. List of fluid state predicates">
      <FluidStatePredicateFormat name="" desc="fluid state predicate"></FluidStatePredicateFormat>
    </TreeGroup>
    <TreeGroup
      icon="list"
      name="remove_fluids"
      desc="[html]Optional. List of fluid or fluid tag ids to exclude from this list. This applies <i>after</i> lists from all packs have been combined, so a pack with lower load order could remove entries from a pack with higher load order">
      <TreeField icon="identifier" name="<fluid id>" desc="A fluid id. This field accepts ids that may not actually exist" />
      <TreeField icon="identifier" name="<tag id>" desc="[html]A fluid tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
    </TreeGroup>
  </TreeGroup>
</template>
