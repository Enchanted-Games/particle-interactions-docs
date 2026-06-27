<script setup lang="ts">
import TreeFieldText from "./TreeFieldText.vue";

const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <li>
    <TreeFieldText :icon="props.icon" :name="props.name" :desc="props.desc"></TreeFieldText>
  </li>
</template>

<style scoped>
li {
  list-style: none;
  padding: 0;
  margin: 0 !important;
  margin-inline-start: 2em !important;

  position: relative;
}

li::before {
  /* line from top to next child */
  content: "";
  position: absolute;

  left: calc(-1.5em - 1px);
  top: 0;
  bottom: 100%;
  width: 2px;
  height: 100%;

  background-color: var(--vp-c-divider);
}

li:last-child::before {
  /* cut line in half if last child */
  height: 51%;
}

li::after {
  /* connect icon to line */
  content: "";
  position: absolute;

  left: calc(-1.5em - 1px);
  top: 0;
  width: 1.4em;
  height: 0.9em;

  border-bottom: 2px solid var(--vp-c-divider);
}
</style>
