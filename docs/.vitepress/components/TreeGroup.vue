<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <ul>
    <img :src="'/images/icons/json/' + props.icon + '.png'" :alt="props.icon" />
    <span>: {{ props.name }}</span>
    <slot></slot>
  </ul>
</template>

<style scoped>
ul:not(ul > ul) {
  /* first group */
  border-radius: 6px;
  background-color: var(--vp-c-bg-alt);
  padding: 0.3em 0.6em;

  box-shadow: var(--vp-shadow-2);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul > ul {
  padding-inline-start: 2em;
  position: relative;
}

ul > ul::before {
  /* connect icon to outer group */
  content: "";
  position: absolute;

  left: calc(0.5em - 1px);
  top: 0;
  width: 1.5em;
  height: 0.9em;

  border: 2px solid var(--vp-c-divider);
  border-right: none;
  border-top: none;
}

ul > ul::after {
  /* continue line down to next child if needed */
  content: "";
  position: absolute;

  left: calc(0.5em - 1px);
  top: 0.9em;
  bottom: 0;
  width: 1.5em;

  border-left: 2px solid var(--vp-c-divider);
}

ul > ul:last-child:after {
  border-left: none;
}

img {
  display: inline-block;
  margin: 0;
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
