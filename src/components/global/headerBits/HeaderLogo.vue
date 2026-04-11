<template>
  <a href="/" class="default-link ml-4 inline-flex shrink-0 items-center p-2">
    <span class="sr-only">AC Plumbers Ltd.</span>
    <img
      src="/images/logo/ac-plumbers-ltd-logo-brighton.svg"
      alt=""
      width="300"
      height="300"
      class="h-auto w-20 object-contain sm:w-28 md:w-32 lg:w-28"
    />
  </a>
  <div
    class="hidden flex-1 justify-center sm:flex xl:flex-none xl:shrink-0 xl:justify-start"
    aria-hidden="true"
  >
    <span
      :class="[
        'rounded-full px-2 py-2 text-base font-bold lg:ml-2 xl:px-4 xl:text-xl',
        taglineColorClass,
      ]"
    >
      Plumbing &bull; Heating &bull; Renewable
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  taglineColorClass: {
    type: String,
    default: "text-primary-600",
  },
});
</script>
