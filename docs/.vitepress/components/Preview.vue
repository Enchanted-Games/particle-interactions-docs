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
    <span class="preview-img-picture-wrapper">
      <picture>
        <source :srcset="srcAvif" type="image/avif" />
        <source :srcset="srcWebp" type="image/webp" />
        <img :src="srcJpeg" :alt="props.alt" loading="lazy" />
      </picture>
    </span>
    <span>{{ props.subtitle }}</span>
    <span class="preview-img-since" :aria-label="'Added in verison ' + props.since">Added in v{{ props.since }}</span>
  </div>
</template>

<style scoped>
.preview-img-wrapper {
  max-width: 700px;
  width: 100%;
  display: grid;
}

.preview-img-picture-wrapper {
  isolation: isolate;
  position: relative;

  margin: 8px 0;

  border-radius: 6px;
  box-shadow:
    0px 4px 12px -1px rgba(0, 0, 0, 0.1),
    0px 2px 6px -2px rgba(0, 0, 0, 0.3),
    0px 0px 6px 0px rgba(255, 255, 255, 1) inset;
}
.preview-img-picture-wrapper::after {
  content: "";
  display: block;
  position: absolute;

  z-index: 2;
  inset: 0;
  user-select: none;
  pointer-events: none;

  border-radius: inherit;
  box-shadow:
    0px 4px 12px -1px rgba(0, 0, 0, 0.1),
    0px 2px 6px -2px rgba(0, 0, 0, 0.3),
    0px 2px 8px -1px rgba(255, 255, 255, 0.1) inset,
    0px 2px 3px -2px rgba(255, 255, 255, 0.1) inset;
}

picture {
  border-radius: inherit;
}

img {
  width: 100%;
  image-rendering: pixelated;
  margin: 0;
  border-radius: inherit;

  z-index: 1;
}

.preview-img-since {
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
