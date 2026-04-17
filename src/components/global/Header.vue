<template>
  <!-- Skip to main content link -->
  <a
    href="#main-content"
    class="default-button sr-only z-100 focus-visible:not-sr-only focus-visible:absolute focus-visible:top-2 focus-visible:left-2"
  >
    Skip to main content
  </a>

  <header class="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
    <div class="w-full">
      <div
        class="bg-white shadow-lg backdrop-blur-md"
        :class="scrolled ? 'border-neutral-200' : 'border-background-50/20'"
      >
        <nav class="flex items-center px-2" aria-label="Main navigation">
          <HeaderLogo />

          <HeaderDesktopNav
            :isActiveLink="isActiveLink"
            :isInServicesSection="isInServicesSection"
          />

          <!-- Mobile hamburger button -->
          <button
            type="button"
            class="-m-3 mr-2 ml-auto rounded-md p-3 text-text-00 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none xl:hidden"
            @click="openMenu"
            aria-controls="mobile-menu"
            :aria-expanded="isOpen ? 'true' : 'false'"
            aria-haspopup="dialog"
            ref="openMenuButton"
          >
            <span class="sr-only">Open main menu</span>
            <IconMenu />
          </button>

          <HeaderDesktopCta />
        </nav>
        <slot name="after-nav" />
      </div>
    </div>

    <!-- Mobile menu -->
    <HeaderMobileMenu
      v-if="isOpen"
      :isActiveLink="isActiveLink"
      @close="closeMenu"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import HeaderLogo from "./headerBits/HeaderLogo.vue";
import HeaderDesktopNav from "./headerBits/HeaderDesktopNav.vue";
import HeaderDesktopCta from "./headerBits/HeaderDesktopCta.vue";
import HeaderMobileMenu from "./headerBits/HeaderMobileMenu.vue";
import IconMenu from "../icons/IconMenu.vue";

const props = defineProps({
  currentPath: { type: String, default: "" },
});

const scrolled = ref(false);
const isOpen = ref(false);
const currentPath = ref(props.currentPath);
const openMenuButton = ref(null);

const isActiveLink = (href) => {
  if (href === "/" && currentPath.value === "/") return true;
  if (href !== "/" && currentPath.value === href) return true;
  return false;
};

const isInServicesSection = () => currentPath.value.startsWith("/services");

function openMenu() {
  isOpen.value = true;
}

function closeMenu() {
  isOpen.value = false;
  nextTick(() => openMenuButton.value?.focus());
}

onMounted(() => {
  if (!currentPath.value && typeof window !== "undefined") {
    currentPath.value = window.location.pathname;
  }
  window.addEventListener("scroll", handleScroll);
  // astro:page-load fires on every Astro View Transition navigation
  // (needed because transition:persist keeps this component alive across pages)
  document.addEventListener("astro:page-load", () => {
    currentPath.value = window.location.pathname;
  });
  // Reset menu state before Astro swaps the body — otherwise isOpen stays true
  // but the teleported DOM gets destroyed, breaking subsequent opens
  document.addEventListener("astro:before-swap", () => {
    isOpen.value = false;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}
</script>

<style scoped></style>
