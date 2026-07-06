<script setup lang="ts">
import { commonProps } from "../../../util/CommonFormatComponentProps.ts";

const defaultName = "[html]<i>Entity List</i>";
const defaultCompactName = "[html]<i>Compact Entity List</i>";

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
    <TreeField icon="identifier" name="<entity type id>" desc="A entity type id. This field accepts ids that may not actually exist" />
    <TreeField icon="identifier" name="<tag id>" desc="[html]A entity type tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
  </TreeGroup>
  <TreeGroup v-else :colour="props.colour" :name="name" :desc="props.desc">
    <TreeGroup icon="list" name="entities" desc="Optional. List of entity type or entity type tag ids">
      <TreeField icon="identifier" name="<entity type id>" desc="A entity type id. This field accepts ids that may not actually exist" />
      <TreeField icon="identifier" name="<tag id>" desc="[html]A entity type tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
    </TreeGroup>
    <TreeGroup
      icon="list"
      name="remove_entities"
      desc="[html]Optional. List of entity type or entity type tag ids to exclude from this list. This applies <i>after</i> lists from all packs have been combined, so a pack with lower load order could remove entries from a pack with higher load order">
      <TreeField icon="identifier" name="<entity type id>" desc="A entity type id. This field accepts ids that may not actually exist" />
      <TreeField icon="identifier" name="<tag id>" desc="[html]A entity type tag id, prefixed with a <code>#</code>. This field accepts ids that may not actually exist" />
    </TreeGroup>
  </TreeGroup>
</template>
