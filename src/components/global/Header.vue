<template>
  <!-- Skip to main content link -->
  <a
    href="#main-content"
    class="default-button sr-only z-[100] focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
  >
    Skip to main content
  </a>

  <header class="absolute inset-x-0 top-0 z-50">
    <div class="w-full">
      <div
        class="bg-background-00/95 px-6 pt-6 shadow-sm backdrop-blur-sm lg:pr-8 lg:pl-8"
      >
        <nav
          class="flex items-center justify-between space-x-4 py-2"
          aria-label="Global"
        >
          <!-- Logo link -->
          <a
            href="/"
            class="default-link -m-1.5 inline-flex flex-shrink-0 items-center p-1.5"
          >
            <span class="sr-only">AC Plumbers Ltd</span>
            <img
              src="/images/logo/ac-plumbers-logo-brighton.png"
              alt="AC Plumbers Ltd logo with water and flame icons"
              width="300"
              height="300"
              title="AC Plumbers Ltd – Plumbing, Heating & Gas Services in Brighton"
              class="h-auto w-20 object-contain sm:w-28 md:w-32 lg:w-28"
            />
          </a>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-text-00 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none lg:hidden"
            @click="openMenu"
            aria-controls="mobile-menu"
            :aria-expanded="isOpen ? 'true' : 'false'"
            aria-haspopup="true"
            ref="openMenuButton"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
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
                    ? 'bg-primary-600 text-background-00 shadow-sm'
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
                    isActiveLink('/services') ||
                    isActiveLink('/plumbing') ||
                    isActiveLink('/heating') ||
                    isActiveLink('/boilers')
                      ? 'bg-primary-600 text-background-00 shadow-sm'
                      : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                  ]"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
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
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    All Services
                  </a>
                  <a
                    href="/plumbing"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🔧 Plumbing Services
                  </a>
                  <a
                    href="/heating"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🔥 Heating Services
                  </a>
                  <a
                    href="/boilers"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🏠 Boiler Services
                  </a>
                  <a
                    href="/landlords"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🏢 Landlord Services
                  </a>
                </div>
              </div>

              <!--   <a
                href="/landlords"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/landlords')
                    ? 'bg-primary-600 text-background-00 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                Landlords
              </a> -->
              <a
                href="/about"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/about')
                    ? 'bg-primary-600 text-background-00 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                About
              </a>
              <a
                href="/testimonials"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/testimonials')
                    ? 'bg-primary-600 text-background-00 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/contact')
                    ? 'bg-primary-600 text-background-00 shadow-sm'
                    : 'text-text-00 hover:text-primary-600 focus:text-primary-600',
                ]"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile menu -->
    <nav
      v-if="isOpen"
      aria-label="Mobile navigation"
      class="font-poppins lg:hidden"
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
              class="h-8 w-auto"
              src="/images/logo/ac-plumbers-logo-brighton.png"
              width="48"
              height="48"
              alt="AC Plumbers Ltd logo with water and flame icons"
              title="AC Plumbers Ltd – Plumbing, Heating & Gas Services in Brighton"
            />
          </a>

          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-text-00 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none"
            @click="closeMenu"
            aria-label="Close navigation menu"
            ref="closeMenuButton"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
                    ? 'bg-primary-600 text-background-00'
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
                      ? 'bg-primary-600 text-background-00'
                      : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  All Services
                </a>
                <a
                  href="/plumbing"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/plumbing')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🔧 Plumbing Services
                </a>
                <a
                  href="/heating"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/heating')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🔥 Heating Services
                </a>
                <a
                  href="/boilers"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/boilers')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🏠 Boiler Services
                </a>
                <a
                  href="/landlords"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/landlords')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🏢 Landlord Services
                </a>
              </div>

              <a
                href="/about-us"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                  isActiveLink('/about')
                    ? 'bg-primary-600 text-background-00'
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
                    ? 'bg-primary-600 text-background-00'
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
                  isActiveLink('/contact')
                    ? 'bg-primary-600 text-background-00'
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
import { ref, nextTick, onMounted, onBeforeUnmount, computed } from "vue";

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
  if (href !== "/" && currentPath.value.startsWith(href)) return true;
  return false;
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
