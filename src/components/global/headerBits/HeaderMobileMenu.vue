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
      class="fixed inset-0 z-[200] bg-black/40 transition-opacity duration-300"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      @click="handleClose"
    ></div>

    <!-- Panel -->
    <div
      class="fixed inset-y-0 right-0 z-[201] flex w-full transform flex-col overflow-y-auto bg-white transition-transform duration-300 ease-in-out sm:max-w-sm sm:shadow-2xl sm:ring-1 sm:ring-gray-900/10"
      :class="isVisible ? 'translate-x-0' : 'translate-x-full'"
      id="menu-panel"
    >
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-gray-100 px-6 pb-4 pt-6">
        <a href="/" @click="handleClose" class="focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded">
          <span class="sr-only">AC Plumbers Ltd.</span>
          <img
            class="h-12 w-auto"
            src="/images/logo/ac-plumbers-logo-brighton.png"
            width="72"
            height="72"
            alt="AC Plumbers Ltd logo"
          />
        </a>
        <button
          type="button"
          class="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none transition-colors"
          @click="handleClose"
          aria-label="Close navigation menu"
          ref="closeButton"
        >
          <span class="sr-only">Close menu</span>
          <IconCloseMenu />
        </button>
      </div>

      <!-- Nav links -->
      <div class="flex-1 overflow-y-auto px-6 py-6">
        <!-- Primary links -->
        <div class="flex flex-col gap-1">
          <a
            v-for="link in primaryLinks"
            :key="link.href"
            :href="link.href"
            :class="[
              'group flex items-center gap-3 rounded-lg px-3 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
              isActiveLink(link.href)
                ? 'bg-primary-600 text-white'
                : 'text-gray-800 hover:bg-primary-50 hover:text-primary-700',
            ]"
            @click="handleClose"
          >
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-lg transition-colors"
              :class="isActiveLink(link.href) ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-primary-100'"
              aria-hidden="true"
            >{{ link.icon }}</span>
            {{ link.label }}
            <svg
              class="ml-auto h-4 w-4 opacity-30 transition-opacity group-hover:opacity-60"
              :class="isActiveLink(link.href) ? 'opacity-60' : ''"
              fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <!-- Services section -->
        <div class="mt-6">
          <p class="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Services</p>
          <div class="rounded-xl bg-gray-50 p-2">
            <a
              href="/services"
              :class="[
                'flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-1',
                isActiveLink('/services') ? 'bg-primary-600 text-white' : 'text-gray-800 hover:bg-white hover:text-primary-700 hover:shadow-sm',
              ]"
              @click="handleClose"
            >
              All Services
              <span class="text-xs font-normal opacity-50">View all →</span>
            </a>
            <div class="my-1.5 h-px bg-gray-200"></div>
            <a
              v-for="service in serviceLinks"
              :key="service.href"
              :href="service.href"
              :class="[
                'block rounded-lg px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-1',
                isActiveLink(service.href) ? 'bg-primary-600 text-white font-medium' : 'text-gray-600 hover:bg-white hover:text-primary-700 hover:shadow-sm',
              ]"
              @click="handleClose"
            >
              {{ service.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom CTA strip -->
      <div class="border-t border-gray-100 bg-primary-800 px-6 py-5">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-300">Need help now?</p>
        <div class="flex flex-col gap-2">
          <a
            :href="`tel:${phone}`"
            data-umami-event="lead_call_click"
            data-umami-event-placement="mobile-menu"
            class="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-primary-800 transition-colors hover:bg-primary-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800 focus:outline-none"
          >
            <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
            </svg>
            {{ phoneDisplay }}
          </a>
          <a
            :href="whatsappUrl"
            data-umami-event="lead_whatsapp_click"
            data-umami-event-placement="mobile-menu"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 rounded-lg border border-primary-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-800 focus:outline-none"
          >
            <IconWhatsAppMenu iconClass="h-4 w-4 shrink-0" />
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import IconCloseMenu from '../../icons/IconCloseMenu.vue'
import IconWhatsAppMenu from '../../icons/IconWhatsAppMenu.vue'
import { BUSINESS_CONFIG, formatPhoneForDisplay, formatPhoneForTel } from '../../../utils/businessConfig'

const props = defineProps({
  isActiveLink: { type: Function, required: true },
})

const emit = defineEmits(['close'])

const mobileMenu = ref(null)
const closeButton = ref(null)
const isVisible = ref(false)

const phone = formatPhoneForTel(BUSINESS_CONFIG.mobilePhone)
const phoneDisplay = formatPhoneForDisplay(BUSINESS_CONFIG.mobilePhone)
const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.mobilePhone.replace('+', '').replace(/\s/g, '')}?text=Hi%20AC%20Plumbers%2C%20I%20need%20help%20with%20my%20plumbing`

const primaryLinks = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/about-us', label: 'About', icon: '👋' },
  { href: '/contact-us', label: 'Contact', icon: '📩' },
]

const serviceLinks = [
  { href: '/services/gas-boiler-installation', label: 'Gas Boiler Installation' },
  { href: '/services/boiler-servicing-and-repair', label: 'Boiler Servicing & Repair' },
  { href: '/services/all-aspects-of-plumbing-heating-and-gas', label: 'Plumbing' },
  { href: '/services/central-heating-installation', label: 'Heating' },
  { href: '/services/gas-safety-checks-cp12', label: 'Gas Safety Checks (CP12)' },
  { href: '/services/renewable-air-source-heat-pump', label: 'Air Source Heat Pumps' },
]

onMounted(() => {
  nextTick(() => {
    isVisible.value = true
    closeButton.value?.focus()
  })
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})

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
    if (document.activeElement === first) { e.preventDefault(); last.focus() }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus() }
  }
}
</script>
