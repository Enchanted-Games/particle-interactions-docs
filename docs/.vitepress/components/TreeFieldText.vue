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

const icons: String[] = props.icon.split("|");
</script>

<template>
  <img v-for="icon in icons" :src="'/images/icons/json/' + icon + '.png'" :alt="icon" />
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
