<script setup lang="ts">
// src should point to a set of 3 images, .avif, .webp, and .jpeg. For example set src to
//  '/images/block-particle-previews/cherry-petals' and the component will choose either
//  'cherry-petals.jpeg', 'cherry-petals.webp', or 'cherry-petals.jpeg'
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
  alt: {
    type: String,
    required: true,
  },
});

const srcAvif = props.src + ".avif";
const srcWebp = props.src + ".webp";
const srcJpeg = props.src + ".jpeg";
</script>

<template>
  <div class="preview-img-wrapper">
    <picture>
      <source :srcset="srcAvif" type="image/avif" />
      <source :srcset="srcWebp" type="image/webp" />
      <img :src="srcJpeg" :alt="props.alt" loading="lazy" />
    </picture>
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
