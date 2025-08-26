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

// Testimonials data (replace with import if needed)
const reviews = [
  {
    rating: "10/10",
    title: "Excellent Boiler Service",
    date: "January 2025",
    content:
      "AC Plumbers provided an outstanding boiler service. The engineer was professional, punctual, and explained everything clearly. Very impressed with the quality of work and attention to detail. Would definitely recommend to anyone in Brighton.",
    location: "Brighton",
  },
  {
    rating: "10/10",
    title: "Emergency Plumbing Response",
    date: "December 2024",
    content:
      "Called AC Plumbers for an emergency leak on a Sunday. They responded quickly and fixed the problem efficiently. Excellent customer service and fair pricing. Saved us from potential water damage.",
    location: "Hove",
  },
  {
    rating: "9/10",
    title: "Gas Safety Certificate",
    date: "December 2024",
    content:
      "Needed a gas safety certificate for my rental property. The service was quick, thorough, and professional. Clear documentation provided and competitive pricing. Will use again next year.",
    location: "Brighton",
  },
  {
    rating: "10/10",
    title: "Bathroom Installation",
    date: "November 2024",
    content:
      "Complete bathroom renovation done to a very high standard. The team was clean, tidy, and professional throughout. Finished on time and within budget. Very happy with the results.",
    location: "Brighton",
  },
  {
    rating: "10/10",
    title: "Central Heating Repair",
    date: "November 2024",
    content:
      "My heating system broke down during the cold spell. AC Plumbers diagnosed and fixed the issue same day. Excellent technical knowledge and customer care. Highly recommended.",
    location: "Hove",
  },
  {
    rating: "9/10",
    title: "Landlord Services",
    date: "October 2024",
    content:
      "Regular maintenance and certification services for my rental properties. Always reliable, professional, and provides clear reports. Great value for money and peace of mind.",
    location: "Brighton",
  },
];
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
            <span class="text-sm text-neutral-500"
              >{{ review.date }} &mdash; {{ review.location }}</span
            >
            <p class="mt-2 text-sm text-neutral-700">{{ review.content }}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
