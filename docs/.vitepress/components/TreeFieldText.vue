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
  desc: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <img :src="'/images/icons/json/' + props.icon + '.png'" :alt="props.icon" />
  <span
    >: <span class="field-name">{{ props.name }}</span> {{ props.desc }}</span
  >
</template>

<style scoped>
img {
  display: inline-block;
  margin: 0;
  width: 1em;
  height: 1em;
  vertical-align: middle;
}

span {
  color: var(--vp-c-text-2);
}

.field-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
