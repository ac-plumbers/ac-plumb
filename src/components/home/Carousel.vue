<script setup lang="ts">
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

function isRecent(date: string) {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return new Date(date) > sixMonthsAgo;
}
</script>

<template>
  <Carousel
    :opts="{ align: 'start', loop: true }"
    :plugins="[Autoplay({ delay: 3000 })]"
    class="relative w-full max-w-6xl"
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
              <span class="text-sm text-neutral-500">{{ review.date }} &mdash; {{ review.location }}</span>
              <span v-if="isRecent(review.date)" class="rounded-full bg-accent-500 px-2 py-0.5 text-xs font-semibold text-white">New</span>
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
</template>
