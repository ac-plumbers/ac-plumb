<template>
  <a href="/" class="default-link ml-4 inline-flex shrink-0 items-center p-2">
    <span class="sr-only">AC Plumbers Ltd.</span>
    <span class="relative aspect-square w-20 sm:w-28 md:w-32 lg:w-28">
      <img
        :src="logoSrc"
        :alt="isDarkSection ? '' : logoAlt"
        :aria-hidden="isDarkSection ? 'true' : 'false'"
        width="300"
        height="300"
        title="AC Plumbers Ltd – Plumbing, Heating & Gas Services in Brighton"
        class="logo-fade absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out"
        :class="isDarkSection ? 'opacity-0' : 'opacity-100'"
      />
      <img
        :src="darkLogoSrc"
        :alt="isDarkSection ? logoAlt : ''"
        :aria-hidden="isDarkSection ? 'false' : 'true'"
        width="300"
        height="300"
        title="AC Plumbers Ltd – Plumbing, Heating & Gas Services in Brighton"
        class="logo-fade absolute inset-0 h-full w-full origin-center scale-95 object-contain transition-opacity duration-500 ease-in-out"
        :class="isDarkSection ? 'opacity-100' : 'opacity-0'"
      />
    </span>
  </a>
  <div
    class="hidden flex-1 justify-center sm:flex lg:flex-auto lg:shrink-0 lg:justify-start"
  >
    <span
      :class="[
        'rounded-full px-4 py-2 text-xl font-bold lg:ml-4',
        taglineColorClass,
      ]"
    >
      Plumbing • Heating • Renewable
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  logoSrc: {
    type: String,
    default: "/images/logo/ac-plumbers-ltd-logo-brighton.svg",
  },
  darkLogoSrc: {
    type: String,
    default: "/images/logo/ac-plumbers-ltd-logo-footer-brighton.svg",
  },
  logoAlt: {
    type: String,
    default: "AC Plumbers Ltd logo with water and flame icons",
  },
  isDarkSection: {
    type: Boolean,
    default: false,
  },
  taglineColorClass: {
    type: String,
    default: "text-primary-600",
  },
});
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .logo-fade {
    transition: none !important;
  }
}
</style>
