<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const defaultName = "[html]<i>Block List</i>";
const defaultCompactName = "[html]<i>Compact Block List</i>";

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
    <TreeField icon="identifier" name="<block id>" desc="A block id. This field accepts ids that may not actually exist" />
    <TreeField icon="identifier" name="<tag id>" desc="[html]A block tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
  </TreeGroup>
  <TreeGroup v-else :colour="props.colour" :name="name" :desc="props.desc">
    <TreeGroup icon="list" name="blocks" desc="Optional. List of block or block tag ids">
      <TreeField icon="identifier" name="<block id>" desc="A block id. This field accepts ids that may not actually exist" />
      <TreeField icon="identifier" name="<tag id>" desc="[html]A block tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
    </TreeGroup>
    <TreeGroup icon="list" name="block_states" desc="Optional. List of block state predicates">
      <BlockStatePredicateFormat name="" desc="block state predicate"></BlockStatePredicateFormat>
    </TreeGroup>
    <TreeGroup
      icon="list"
      name="remove_blocks"
      desc="[html]Optional. List of block or block tag ids to exclude from this list. This applies <i>after</i> lists from all packs have been combined, so a pack with lower load order could remove entries from a pack with higher load order">
      <TreeField icon="identifier" name="<block id>" desc="A block id. This field accepts ids that may not actually exist" />
      <TreeField icon="identifier" name="<tag id>" desc="[html]A block tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
    </TreeGroup>
  </TreeGroup>
</template>
