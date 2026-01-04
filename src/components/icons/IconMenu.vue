<template>
  <svg
    :class="iconClass"
    fill="none"
    viewBox="0 0 24 24"
    :stroke-width="strokeWidth"
    :stroke="color"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: "size-8",
  },
  color: {
    type: String,
    default: "currentColor",
  },
  strokeWidth: {
    type: [String, Number],
    default: 2,
  },
});
</script>
