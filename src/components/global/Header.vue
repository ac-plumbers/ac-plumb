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
        class="backdrop- 🌱 Air Source Heat Pumps 🌡️ Smart Thermostatslur-md border-b border-white/20 bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 px-6 pt-6 shadow-lg lg:pr-8 lg:pl-8"
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
                    isInServicesSection()
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
                    class="block border-b border-gray-100 px-4 py-2 text-sm font-medium text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    📋 All Services
                  </a>
                  <a
                    href="/services/plumbing"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🔧 Plumbing, Heating & Gas
                  </a>
                  <a
                    href="/services/gas-boiler-installation"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🔥 Gas Boiler Installation
                  </a>
                  <a
                    href="/services/central-heating-installation"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🏠 Central Heating Installation
                  </a>
                  <a
                    href="/services/gas-safety-checks-cp12"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    🛡️ Gas Safety Checks (CP12)
                  </a>
                  <a
                    href="/services/smart-thermostats"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    �️ Smart Thermostats
                  </a>
                  <a
                    href="/services/renewable-air-source-heat-pump"
                    class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600"
                    role="menuitem"
                  >
                    � Air Source Heat Pumps
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
                href="/about-us"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/about-us')
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
                href="/contact-us"
                :class="[
                  'rounded-md px-2 py-1 transition-colors duration-200 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none',
                  isActiveLink('/contact-us')
                    ? 'bg-primary-600 text-background-00 shadow-sm'
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
              <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                />
              </svg>
              <span class="hidden xl:inline">WhatsApp</span>
            </a>

            <!-- Emergency Call Button -->
            <a
              href="tel:01273123456"
              class="flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium text-red-700 transition-colors duration-200 hover:bg-red-50 hover:text-red-800 focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:outline-none"
              title="24/7 Emergency Plumbing"
            >
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span class="hidden xl:inline">Emergency</span>
              <span class="xl:hidden">Call</span>
            </a>

            <!-- Free Quote CTA -->
            <a
              href="/contact-us"
              class="rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-background-00 shadow-sm transition-colors duration-200 hover:bg-primary-700 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none"
            >
              <span class="hidden xl:inline">Free Quote</span>
              <span class="xl:hidden">Quote</span>
            </a>
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
                  href="/services/plumbing"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/plumbing')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🔧 Plumbing, Heating & Gas
                </a>
                <a
                  href="/services/gas-boiler-installation"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/gas-boiler-installation')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🔥 Gas Boiler Installation
                </a>
                <a
                  href="/services/central-heating-installation"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/central-heating-installation')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🏠 Central Heating Installation
                </a>
                <a
                  href="/services/gas-safety-checks-cp12"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/gas-safety-checks-cp12')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  🛡️ Gas Safety Checks (CP12)
                </a>
                <a
                  href="/services/smart-thermostats"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/smart-thermostats')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  �️ Smart Thermostats
                </a>
                <a
                  href="/services/renewable-air-source-heat-pump"
                  :class="[
                    '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                    isActiveLink('/services/renewable-air-source-heat-pump')
                      ? 'bg-primary-600 text-background-00'
                      : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                  ]"
                  role="listitem"
                  @click="closeMenu"
                >
                  � Air Source Heat Pumps
                </a>
              </div>

              <a
                href="/about-us"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                  isActiveLink('/about-us')
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
                  isActiveLink('/contact-us')
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
