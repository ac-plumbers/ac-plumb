<template>
  <!-- Skip to main content link -->
  <a
    href="#main-content"
    class="default-button sr-only z-100 focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
  >
    Skip to main content
  </a>
  <header class="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
    <div class="w-full">
      <div
        class="border-b px-6 pt-3 shadow-lg backdrop-blur-md lg:pr-8 lg:pl-8"
        :class="scrolled ? 'border-neutral-200' : 'border-background-50/20'"
      >
        <nav class="flex items-center py-1" aria-label="Global">
          <!-- Logo link and tagline-->
          <HeaderLogo
            :taglineColorClass="taglineColorClass"
            :taglineRef="taglineRef"
          />
          <!-- Desktop nav links -->
          <!-- <div
            class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center"
          >
            <div class="text-md flex gap-x-4 font-medium xl:gap-x-6">

            </div>
          </div> -->
          <!-- CTA Actions -->
          <div class="hidden items-center gap-x-3 lg:flex">
            <!-- ...existing code... -->
          </div>

          <!-- Mobile menu button (always right-aligned) -->
          <button
            type="button"
            class="-m-3 ml-auto rounded-md p-3 text-text-00 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none lg:hidden"
            @click="openMenu"
            aria-controls="mobile-menu"
            :aria-expanded="isOpen ? 'true' : 'false'"
            aria-haspopup="true"
            ref="openMenuButton"
          >
            <span class="sr-only">Open main menu</span>
            <IconMenu />
          </button>

          <!-- Desktop nav links -->
          <div
            class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center"
          >
            <div class="text-md flex gap-x-4 font-medium xl:gap-x-6">
              <a
                href="/"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/')
                    ? 'bg-primary-600 text-background-100 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                Home
              </a>

              <!-- Services Dropdown -->
              <div
                class="relative"
                @mouseenter="showServicesDropdown = true"
                @mouseleave="showServicesDropdown = false"
              >
                <button
                  type="button"
                  :class="[
                    'flex items-center gap-x-1 rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                    isInServicesSection()
                      ? 'bg-primary-600 text-background-100 shadow-sm'
                      : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                  ]"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services
                  <IconMenuServices />
                </button>

                <!-- Dropdown Menu -->
                <div
                  v-show="showServicesDropdown"
                  class="absolute top-full left-0 z-10 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-900/5"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <a
                    href="/services"
                    class="block border-b border-gray-100 px-4 py-2 text-sm font-medium text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    📋 All Services
                  </a>
                  <div
                    class="hidden px-4 py-1 text-xs font-semibold tracking-wide text-gray-400 uppercase"
                  >
                    Core Services
                  </div>
                  <a
                    href="/services/gas-boiler-installation"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    Gas Boiler Installation
                  </a>
                  <a
                    href="/services/all-aspects-of-plumbing-heating-and-gas"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    Plumbing, Heating & Gas
                  </a>
                  <a
                    href="/services/central-heating-installation"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    Central Heating Installation
                  </a>
                  <!-- Separator with category label -->
                  <div class="my-1 border-t border-gray-200"></div>
                  <div
                    class="hidden px-4 py-1 text-xs font-semibold tracking-wide text-gray-400 uppercase"
                  >
                    Safety & Smart Systems
                  </div>
                  <a
                    href="/services/gas-safety-checks-cp12"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    Gas Safety Checks (CP12)
                  </a>
                  <a
                    href="/services/renewable-air-source-heat-pump"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    Air Source Heat Pumps
                  </a>
                </div>
              </div>
              <a
                href="/about-us"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/about-us')
                    ? 'bg-primary-600 text-background-100 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                About
              </a>
              <a
                href="/contact-us"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/contact-us')
                    ? 'bg-primary-600 text-background-100 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                Contact
              </a>
            </div>
          </div>
          <!-- CTA Actions -->
          <div class="hidden items-center gap-x-3 lg:flex">
            <!-- WhatsApp Button -->
            <a
              href="https://wa.me/447123456789?text=Hi%20AC%20Plumbers%2C%20I%20need%20help%20with%20my%20plumbing"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-800 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
              title="Chat with us on WhatsApp"
            >
              <IconWhatsAppMenu />
              <span class="hidden xl:inline">WhatsApp</span>
            </a>

            <!-- Emergency Call Button -->

            <!-- Free Quote CTA -->
            <a
              href="/contact-us"
              class="rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-background-100 shadow-sm transition-colors duration-200 hover:bg-primary-700 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none"
            >
              <span class="hidden xl:inline">Free Quote</span>
              <span class="xl:hidden">Quote</span>
            </a>
          </div>
        </nav>
        <slot name="after-nav" />
      </div>
    </div>
    <!-- Mobile menu -->
    <nav
      v-if="isOpen"
      aria-label="Mobile navigation"
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      id="mobile-menu"
      tabindex="-1"
      ref="mobileMenu"
    >
      <h2 id="mobile-menu-title" class="sr-only">Main Navigation Menu</h2>
      <div class="fixed inset-0 z-50 bg-black/25" @click="isOpen = false"></div>

      <div
        class="fixed inset-y-0 right-0 z-50 w-full translate-x-0 transform overflow-y-auto bg-white p-6 transition-transform duration-300 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        id="menu-panel"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="default-link -m-1.5 p-1.5">
            <span class="sr-only">AC Plumbers Ltd.</span>
            <img
              class="h-14 w-auto"
              src="/images/logo/ac-plumbers-logo-brighton.png"
              width="72"
              height="72"
              alt="AC Plumbers Ltd logo with water and flame icons"
              title="AC Plumbers Ltd – Plumbing, Heating & Gas Services in Brighton"
            />
          </a>

          <button
            type="button"
            class="-m-3 rounded-md p-3 text-text-00 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none"
            @click="closeMenu"
            aria-label="Close navigation menu"
            ref="closeMenuButton"
          >
            <span class="sr-only">Close menu</span>
            <IconCloseMenu />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="flex flex-col space-y-2 py-6" role="list">
              <a
                href="/"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                  isActiveLink('/')
                    ? 'bg-primary-600 text-background-100'
                    : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                ]"
                role="listitem"
                @click="closeMenu"
              >
                Home
              </a>

              <!-- Services Section -->
              <div class="py-2">
                <div
                  class="px-3 py-1 text-xs font-semibold tracking-wide text-gray-500 uppercase"
                >
                  Services
                </div>
                <a
                  href="/services"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium focus:outline-none',
                    isActiveLink('/services')
                      ? 'bg-primary-600 text-background-100'
                      : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  All Services
                </a>
                <a
                  href="/services/gas-boiler-installation"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/gas-boiler-installation')
                      ? 'bg-primary-600 text-background-100'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  Gas Boiler Installation
                </a>
                <a
                  href="/services/all-aspects-of-plumbing-heating-and-gas"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/plumbing')
                      ? 'bg-primary-600 text-background-100'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  Plumbing, Heating & Gas
                </a>

                <a
                  href="/services/central-heating-installation"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/central-heating-installation')
                      ? 'bg-primary-600 text-background-100'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  Central Heating Installation
                </a>
                <!-- Separator -->
                <div class="mx-3 my-2 border-t border-gray-200"></div>
                <a
                  href="/services/gas-safety-checks-cp12"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/gas-safety-checks-cp12')
                      ? 'bg-primary-600 text-background-100'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  Gas Safety Checks (CP12)
                </a>
                <a
                  href="/services/renewable-air-source-heat-pump"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/renewable-air-source-heat-pump')
                      ? 'bg-primary-600 text-background-100'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  Air Source Heat Pumps
                </a>
              </div>

              <a
                href="/about-us"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                  isActiveLink('/about-us')
                    ? 'bg-primary-600 text-background-100'
                    : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                ]"
                role="listitem"
                @click="closeMenu"
              >
                About
              </a>
              <a
                href="/testimonials"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                  isActiveLink('/testimonials')
                    ? 'bg-primary-600 text-background-100'
                    : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                ]"
                role="listitem"
                @click="closeMenu"
              >
                Testimonials
              </a>
              <a
                href="/contact-us"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                  isActiveLink('/contact-us')
                    ? 'bg-primary-600 text-background-100'
                    : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                ]"
                role="listitem"
                @click="closeMenu"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Import icons
import IconCloseMenu from "../icons/IconCloseMenu.vue";
import IconMenu from "../icons/IconMenu.vue";
import IconMenuServices from "../icons/IconMenuServices.vue";
import IconWhatsAppMenu from "../icons/IconWhatsAppMenu.vue";

import { ref, nextTick, onMounted, onBeforeUnmount, computed } from "vue";
import HeaderLogo from "./headerBits/HeaderLogo.vue";
// Tagline color switching logic
const taglineRef = ref(null);
const taglineColorClass = ref("text-primary-600");
const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Intersection Observer for section background detection
  // Each section should have data-bg="dark" or data-bg="light"
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("[data-bg]");
  function updateTaglineColor() {
    let found = false;
    const headerRect = header.getBoundingClientRect();
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Check if section is under the header (top of section is at or above header bottom, and bottom is below header top)
      if (rect.top < headerRect.bottom && rect.bottom > headerRect.top) {
        const bg = section.getAttribute("data-bg");
        if (bg === "dark") {
          taglineColorClass.value = "text-white";
        } else {
          taglineColorClass.value = "text-primary-600";
        }
        found = true;
      }
    });
    if (!found) {
      taglineColorClass.value = "text-primary-600";
    }
  }
  window.addEventListener("scroll", updateTaglineColor, { passive: true });
  window.addEventListener("resize", updateTaglineColor);
  nextTick(updateTaglineColor);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Define props to receive current path from Astro
const props = defineProps({
  currentPath: {
    type: String,
    default: "",
  },
});

const isOpen = ref(false);
const showServicesDropdown = ref(false);
const openMenuButton = ref(null);
const closeMenuButton = ref(null);
const mobileMenu = ref(null);
const currentPath = ref(props.currentPath);

// Get current path for active link highlighting (fallback for client-side)
onMounted(() => {
  // Only update if no path was provided via props
  if (!currentPath.value && typeof window !== "undefined") {
    currentPath.value = window.location.pathname;
  }
  document.addEventListener("keydown", handleTab);

  // Listen for navigation changes (for SPA-like behavior)
  if (typeof window !== "undefined") {
    window.addEventListener("popstate", () => {
      currentPath.value = window.location.pathname;
    });
  }
});

// Helper function to check if a link is active
const isActiveLink = (href) => {
  if (href === "/" && currentPath.value === "/") return true;
  if (href !== "/" && currentPath.value === href) return true;
  return false;
};

// Helper function to check if we're in the services section (for dropdown highlighting)
const isInServicesSection = () => {
  return currentPath.value.startsWith("/services");
};

function openMenu() {
  isOpen.value = true;
  nextTick(() => {
    // Focus the close button for accessibility
    closeMenuButton.value?.focus();
  });
}

function closeMenu() {
  isOpen.value = false;
  nextTick(() => {
    // Return focus to the open menu button
    openMenuButton.value?.focus();
  });
}

// Optional: Trap focus inside the mobile menu when open
function handleTab(e) {
  if (!isOpen.value) return;
  const focusableEls = mobileMenu.value?.querySelectorAll(
    'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
  if (!focusableEls || focusableEls.length === 0) return;
  const first = focusableEls[0];
  const last = focusableEls[focusableEls.length - 1];
  if (e.key === "Tab") {
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleTab);
});
</script>

<style scoped>
/* Define or import utility styles if needed */
</style>
