<template>
  <!-- Skip to main content link -->
  <a
    href="#main-content"
    class="default-button sr-only z-[100] focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
  >
    Skip to main content
  </a>

  <header class="absolute inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-[1330px]">
      <div class="px-6 pt-6 lg:max-w-2xl lg:pr-0 lg:pl-8">
        <nav
          class="flex items-center justify-between space-x-4 lg:justify-start"
          aria-label="Global"
        >
          <!-- Logo link -->
          <a
            href="/"
            class="default-link -m-1.5 inline-flex flex-shrink-0 items-center p-1.5"
          >
            <span class="sr-only">AC Plumbers</span>
            <img
              src="/images/logo/logo.png"
              alt="AC Plumbers Logo"
              width="300"
              height="300"
              class="h-auto w-20 object-contain sm:w-28 md:w-32 lg:w-28"
            />
          </a>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 focus:ring-2 focus:ring-[--color-primary-600] focus:ring-offset-2 focus:outline-none lg:hidden"
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
            class="hidden flex-grow-0 uppercase lg:ml-12 lg:flex lg:gap-x-14"
          >
            <a href="/services" class="default-link">Services</a>
            <a href="/landlords" class="default-link">Landlords</a>
            <a href="/about-us" class="default-link">About</a>
            <a href="/testimonials" class="default-link">Testimonials</a>
            <a href="/contact-us" class="default-link">Contact</a>
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
            <span class="sr-only">AC Plumbers</span>
            <img
              class="h-8 w-auto"
              src="/images/logo/logo.png"
              width="48"
              height="48"
              alt="AC Plumb Logo"
            />
          </a>

          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 focus:ring-2 focus:ring-[--color-primary-600] focus:ring-offset-2 focus:outline-none"
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
                href="/services"
                class="default-link -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                role="listitem"
              >
                Services
              </a>
              <a
                href="/landlords"
                class="default-link -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                role="listitem"
              >
                Landlords
              </a>
              <a
                href="/testimonials"
                class="default-link -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                role="listitem"
              >
                Testimonials
              </a>
              <a
                href="/about-us"
                class="default-link -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                role="listitem"
              >
                About
              </a>
              <a
                href="/contact-us"
                class="default-link -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                role="listitem"
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
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const openMenuButton = ref(null);
const closeMenuButton = ref(null);
const mobileMenu = ref(null);

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

onMounted(() => {
  document.addEventListener("keydown", handleTab);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleTab);
});
</script>

<style scoped>
/* Define or import utility styles if needed */
</style>
