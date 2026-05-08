<template>
  <a
    :href="href"
    :aria-current="isActiveLink(href) ? 'page' : undefined"
    :class="[
      'rounded-md px-2 py-1 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:outline-none',
      isActiveLink(href)
        ? 'bg-primary-600 text-background-100 shadow-sm'
        : 'text-text-00 hover:text-primary-600',
    ]"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
  isActiveLink: { type: Function, required: true },
});
</script>
