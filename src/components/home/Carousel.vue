<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const props = defineProps<{
  reviews: {
    rating: string;
    title: string;
    date: string;
    content: string;
    location: string;
  }[];
}>();
const reviews = props.reviews;

// Start paused if the user prefers reduced motion
const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

const isPaused = ref(prefersReducedMotion);

const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: false });

function handleMouseEnter() {
  autoplayPlugin.stop();
}

function handleMouseLeave() {
  if (!isPaused.value) {
    autoplayPlugin.play();
  }
}

function togglePause() {
  isPaused.value = !isPaused.value;
  if (isPaused.value) {
    autoplayPlugin.stop();
  } else {
    autoplayPlugin.play();
  }
}

// Respect prefers-reduced-motion on mount
onMounted(() => {
  if (prefersReducedMotion) {
    autoplayPlugin.stop();
  }
});

function isRecent(date: string) {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return new Date(date) > sixMonthsAgo;
}
</script>

<template>
  <div
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    class="flex flex-col items-center gap-4"
  >
    <!-- Screen-reader live region announces pause/play state changes -->
    <span aria-live="polite" aria-atomic="true" class="sr-only">
      {{ isPaused ? "Reviews paused" : "Reviews playing" }}
    </span>

    <Carousel
      :opts="{ align: 'start', loop: true }"
      :plugins="[autoplayPlugin]"
      class="relative w-full max-w-6xl"
      aria-label="Customer testimonials"
    >
      <CarouselContent class="-ml-4">
        <CarouselItem
          v-for="(review, index) in reviews"
          :key="index"
          class="pl-4 md:basis-1/2 lg:basis-1/3"
        >
          <Card>
            <CardContent
              class="flex flex-col items-start justify-center gap-2 p-6"
            >
              <span class="font-lato text-base font-bold text-accent-500">{{
                review.location
              }}</span>
              <span class="font-lato text-lg font-semibold">{{
                review.title
              }}</span>
              <div class="flex items-center gap-2">
                <span class="text-sm text-neutral-500"
                  >{{ review.date }} &mdash; {{ review.location }}</span
                >
                <span
                  v-if="isRecent(review.date)"
                  class="rounded-full bg-accent-500 px-2 py-0.5 text-xs font-semibold text-white"
                  >New</span
                >
              </div>
              <p class="mt-2 line-clamp-5 text-sm text-neutral-700">
                {{ review.content }}
              </p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <!-- Pause / Play toggle -->
    <button
      type="button"
      :aria-pressed="isPaused"
      @click="togglePause"
      class="mt-2 inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-primary-300 transition-colors hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus:outline-none"
    >
      <!-- Pause icon -->
      <svg
        v-if="!isPaused"
        class="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- Play icon -->
      <svg
        v-else
        class="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clip-rule="evenodd"
        />
      </svg>
      {{ isPaused ? "Play reviews" : "Pause reviews" }}
    </button>
  </div>
</template>
