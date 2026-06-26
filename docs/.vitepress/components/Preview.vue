<script setup lang="ts">
const props = defineProps({
  subtitle: {
    type: String,
    required: false,
  },
  since: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="preview-img-wrapper">
    <img :src="props.src" :alt="props.subtitle" />
    <span>{{ props.subtitle }}</span>
    <span class="preview-img-since" :aria-label="'Since verison ' + props.since">Since: v{{ props.since }}</span>
  </div>
</template>

<style scoped>
.preview-img-wrapper {
  max-width: 700px;
  width: 100%;
  display: grid;
}

img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  image-rendering: pixelated;
  margin: 8px 0;
}

.preview-img-since {
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
