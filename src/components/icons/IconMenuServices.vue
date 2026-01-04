<template>
  <svg
    class="size-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
</template>

<script setup>
defineProps({
  iconClass: {
    type: String,
    default: "size-4",
  },
  color: {
    type: String,
    default: "currentColor",
  },
  strokeWidth: {
    type: [String, Number],
    default: 1.5,
  },
});
</script>
