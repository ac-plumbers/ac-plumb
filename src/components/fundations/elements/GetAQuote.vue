<script setup lang="ts">
import { computed } from "vue";
import {
  ArrowRight,
  FileText,
  Mail,
  Send,
  MessageSquare,
  Calendar,
} from "lucide-vue-next";
import Link from "./Link.astro";
import Text from "./Text.astro";

interface Props {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "outline"
    | "ghost"
    | "gradient";

  /**
   * Size of the button
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Display mode for the button
   * @default 'full'
   */
  display?: "full" | "short" | "icon-only" | "with-label";

  /**
   * Icon style to use
   * @default 'arrow'
   */
  iconStyle?:
    | "arrow"
    | "file"
    | "mail"
    | "send"
    | "message"
    | "calendar"
    | "none";

  /**
   * Show pulse animation (attention-grabbing)
   * @default false
   */
  pulse?: boolean;

  /**
   * Custom button text
   * @default 'Get a Quote'
   */
  text?: string;

  /**
   * Additional label text (shown above main text when display='with-label')
   * @default undefined
   */
  label?: string;

  /**
   * Custom href destination
   * @default '/contact-us'
   */
  href?: string;

  /**
   * Additional CSS classes
   */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  display: "full",
  iconStyle: "arrow",
  pulse: false,
  text: "Get a Quote",
  href: "/contact-us",
  class: "",
});

// Icon selection
const iconComponents = {
  arrow: ArrowRight,
  file: FileText,
  mail: Mail,
  send: Send,
  message: MessageSquare,
  calendar: Calendar,
  none: null,
};

const IconComponent = computed(() => iconComponents[props.iconStyle]);

// Variant styles
const variantStyles = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-primary-700/40 ring-2 ring-primary-300/50",
  secondary:
    "bg-white text-primary-600 hover:bg-gray-50 shadow-lg border-2 border-primary-600 hover:border-primary-700",
  accent:
    "bg-accent-500 text-gray-900 hover:bg-accent-600 shadow-lg shadow-accent-500/40 hover:shadow-accent-600/50 ring-2 ring-accent-300/50",
  outline:
    "bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50 hover:border-primary-700",
  ghost:
    "bg-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800",
  gradient:
    "bg-linear-to-r from-primary-600 to-primary-800 text-white hover:from-primary-700 hover:to-primary-900 shadow-lg shadow-primary-600/40",
};

// Size styles
const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
};

// Base styles
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary-300/50";

// Pulse animation
const pulseClass = computed(() => (props.pulse ? "animate-pulse" : ""));

// Combined classes
const buttonClasses = computed(
  () =>
    `${baseStyles} ${variantStyles[props.variant]} ${sizeStyles[props.size]} ${pulseClass.value} ${props.class}`,
);

// Text display logic
const textDisplay = computed(() => {
  switch (props.display) {
    case "short":
      return "Quote";
    case "icon-only":
      return null;
    case "with-label":
      return props.text;
    case "full":
    default:
      return props.text;
  }
});

const showLabel = computed(() => props.display === "with-label" && props.label);
</script>

<template>
  <a
    :href="href"
    :class="buttonClasses"
    :aria-label="`${text} - Navigate to contact page`"
  >
    <span
      v-if="pulse"
      class="absolute -inset-1 rounded-lg bg-primary-400 opacity-75 blur"
      aria-hidden="true"
    />

    <span v-if="textDisplay" class="relative">
      <span v-if="showLabel" class="block text-xs opacity-80">
        {{ label }}
      </span>
      <span
        :class="{
          'text-sm': size === 'sm',
          'text-lg': size === 'xl',
          'text-base': size === 'md' || size === 'lg',
        }"
        class="font-semibold"
      >
        {{ textDisplay }}
      </span>
    </span>

    <component
      v-if="IconComponent"
      :is="IconComponent"
      :class="iconSizes[size]"
      aria-hidden="true"
    />
  </a>
</template>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
