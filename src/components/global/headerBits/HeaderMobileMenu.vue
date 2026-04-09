<template>
  <nav
    aria-label="Mobile navigation"
    class="xl:hidden"
    role="dialog"
    aria-modal="true"
    aria-labelledby="mobile-menu-title"
    id="mobile-menu"
    tabindex="-1"
    ref="mobileMenu"
  >
    <h2 id="mobile-menu-title" class="sr-only">Main Navigation Menu</h2>

    <!-- Backdrop -->
    <div
      class="fixed inset-0 z-50 bg-black/25 transition-opacity duration-300"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      @click="handleClose"
    ></div>

    <!-- Panel -->
    <div
      class="fixed inset-y-0 right-0 z-50 w-full transform overflow-y-auto bg-white p-6 transition-transform duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      :class="isVisible ? 'translate-x-0' : 'translate-x-full'"
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
          @click="handleClose"
          aria-label="Close navigation menu"
          ref="closeButton"
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
                isActiveLink('/') ? 'bg-primary-600 text-background-100' : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
              ]"
              role="listitem"
              @click="handleClose"
            >Home</a>

            <!-- Services Section -->
            <div class="py-2">
              <div class="px-3 py-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">Services</div>
              <a
                href="/services"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium focus:outline-none',
                  isActiveLink('/services') ? 'bg-primary-600 text-background-100' : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
                ]"
                role="listitem"
                @click="handleClose"
              >All Services</a>
              <a
                href="/services/gas-boiler-installation"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                  isActiveLink('/services/gas-boiler-installation') ? 'bg-primary-600 text-background-100' : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                ]"
                role="listitem"
                @click="handleClose"
              >Gas Boiler Installation</a>
              <a
                href="/services/boiler-servicing-and-repair"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                  isActiveLink('/services/boiler-servicing-and-repair') ? 'bg-primary-600 text-background-100' : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                ]"
                role="listitem"
                @click="handleClose"
              >Boiler Servicing & Repair</a>
              <a
                href="/services/all-aspects-of-plumbing-heating-and-gas"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                  isActiveLink('/services/all-aspects-of-plumbing-heating-and-gas') ? 'bg-primary-600 text-background-100' : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                ]"
                role="listitem"
                @click="handleClose"
              >Plumbing</a>
              <a
                href="/services/central-heating-installation"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                  isActiveLink('/services/central-heating-installation') ? 'bg-primary-600 text-background-100' : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                ]"
                role="listitem"
                @click="handleClose"
              >Heating</a>
              <div class="mx-3 my-2 border-t border-gray-200"></div>
              <a
                href="/services/gas-safety-checks-cp12"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                  isActiveLink('/services/gas-safety-checks-cp12') ? 'bg-primary-600 text-background-100' : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                ]"
                role="listitem"
                @click="handleClose"
              >Gas Safety Checks (CP12)</a>
              <a
                href="/services/renewable-air-source-heat-pump"
                :class="[
                  '-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm focus:outline-none',
                  isActiveLink('/services/renewable-air-source-heat-pump') ? 'bg-primary-600 text-background-100' : 'text-gray-600 hover:bg-accent-500/10 hover:text-primary-600',
                ]"
                role="listitem"
                @click="handleClose"
              >Air Source Heat Pumps</a>
            </div>

            <a
              href="/about-us"
              :class="[
                '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                isActiveLink('/about-us') ? 'bg-primary-600 text-background-100' : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
              ]"
              role="listitem"
              @click="handleClose"
            >About</a>
            <a
              href="/testimonials"
              :class="[
                '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                isActiveLink('/testimonials') ? 'bg-primary-600 text-background-100' : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
              ]"
              role="listitem"
              @click="handleClose"
            >Testimonials</a>
            <a
              href="/contact-us"
              :class="[
                '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold focus:outline-none',
                isActiveLink('/contact-us') ? 'bg-primary-600 text-background-100' : 'text-text-00 hover:bg-accent-500/10 focus:bg-accent-500/10',
              ]"
              role="listitem"
              @click="handleClose"
            >Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import IconCloseMenu from '../../icons/IconCloseMenu.vue'

const props = defineProps({
  isActiveLink: { type: Function, required: true },
})

const emit = defineEmits(['close'])

const mobileMenu = ref(null)
const closeButton = ref(null)
const isVisible = ref(false)

onMounted(() => {
  // Trigger enter animation on next tick (after DOM paint)
  nextTick(() => {
    isVisible.value = true
    closeButton.value?.focus()
  })
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Animate out, then tell parent to unmount
function handleClose() {
  isVisible.value = false
  setTimeout(() => emit('close'), 300)
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    handleClose()
    return
  }
  if (e.key !== 'Tab') return
  const focusable = mobileMenu.value?.querySelectorAll(
    'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
  )
  if (!focusable || focusable.length === 0) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault()
      last.focus()
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}
</script>
