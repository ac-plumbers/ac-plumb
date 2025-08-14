--- // src/components/global/StickyCallButton.vue
<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4"
  >
    <div v-if="showButton" class="fixed right-4 bottom-4 z-40">
      <a
        href="tel:01273123456"
        class="flex items-center gap-2 rounded-full bg-primary-600 px-4 py-3 text-background-50 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary-700"
        aria-label="Call AC Plumbers now at 01273 123 456"
      >
        <svg
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
        <span class="hidden font-medium sm:inline">Call Now</span>
      </a>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  // Show button after scrolling 300px down
  showButton.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
