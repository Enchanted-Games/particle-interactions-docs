<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: "object",
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

var formattedTypes: String = icons.length == 1 ? "Type: " : "Types: ";
for (let i = 0; i < icons.length; i++) {
  if (icons.length == 2) {
    formattedTypes += icons[0] + " or " + icons[1];
    break;
  }
  formattedTypes += icons[i];
  if (i != icons.length - 1) formattedTypes += ", ";
  if (i == icons.length - 2) formattedTypes += "or ";
}
</script>

<template>
  <span class="field-icons-wrapper">
    <span class="field-icons-tooltip">
      {{ formattedTypes }}
    </span>
    <img draggable="false" v-for="icon in icons" :src="'/images/icons/json/' + icon + '.png'" :alt="icon" />
  </span>
  <span
    >: <span class="field-name">{{ props.name }}</span> {{ props.desc }}</span
  >
</template>

<style scoped>
.field-icons-wrapper {
  user-select: none;
  position: relative;
}

.field-icons-wrapper .field-icons-tooltip {
  --_padding-block: 0.3em;
  --_padding-inline: 0.5em;

  display: none;
  z-index: 3;

  content: attr(data-tooltip-text);
  position: absolute;
  left: calc(100% + var(--_padding-inline));
  top: calc(var(--_padding-block) * -1);

  color: var(--vp-c-text-1);
  text-wrap: nowrap;

  background-color: var(--vp-c-bg-elv);
  padding: var(--_padding-block) var(--_padding-inline);
  border-radius: 6px;
}

.field-icons-wrapper:hover .field-icons-tooltip {
  display: inline;
}

img {
  display: inline-block;
  margin: 0;
  width: 1em;
  height: 1em;
  vertical-align: middle;

  image-rendering: pixelated;
}

span {
  color: var(--vp-c-text-2);
}

.field-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
