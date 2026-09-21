<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="resolvedSize"
    :height="resolvedSize"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="['omp-svg-icon', customClass]"
    aria-hidden="true"
  >
    <component
      :is="item.tag"
      v-for="(item, index) in elements"
      :key="index"
      v-bind="item.attrs"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ICON_DEFINITIONS, type IconName } from '../utils/icons';

const props = withDefaults(
  defineProps<{
    name: IconName;
    size?: number | string;
    class?: string;
  }>(),
  {
    size: 16,
    class: ''
  }
);

const resolvedSize = computed(() => props.size);
const customClass = computed(() => props.class);
const elements = computed(() => ICON_DEFINITIONS[props.name] || ICON_DEFINITIONS.info);
</script>

<style scoped>
.omp-svg-icon {
  display: inline-block;
  vertical-align: -0.125em;
  flex-shrink: 0;
}
</style>
