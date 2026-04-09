<template>
  <div class="hidden xl:flex xl:flex-1 xl:items-center xl:justify-center">
    <div class="flex gap-x-4 text-lg font-medium xl:gap-x-4">
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
          :aria-expanded="showServicesDropdown"
          aria-haspopup="true"
        >
          Services
          <IconMenuServices />
        </button>

        <div
          v-show="showServicesDropdown"
          class="absolute top-full left-0 z-10 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-900/5"
          role="menu"
          aria-orientation="vertical"
        >
          <a href="/services" class="block border-b border-gray-100 px-4 py-2 text-sm font-medium text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
            All Services
          </a>
          <a href="/services/gas-boiler-installation" class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
            Gas Boiler Installation
          </a>
          <a href="/services/boiler-servicing-and-repair" class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
            Boiler Servicing & Repairs
          </a>
          <a href="/services/all-aspects-of-plumbing-heating-and-gas" class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
            Plumbing
          </a>
          <a href="/services/central-heating-installation" class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
            Heating
          </a>
          <div class="my-1 border-t border-gray-200"></div>
          <a href="/services/gas-safety-checks-cp12" class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
            Gas Safety Checks (CP12)
          </a>
          <a href="/services/renewable-air-source-heat-pump" class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600" role="menuitem">
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
</template>

<script setup>
import { ref } from 'vue'
import IconMenuServices from '../../icons/IconMenuServices.vue'

const props = defineProps({
  isActiveLink: { type: Function, required: true },
  isInServicesSection: { type: Function, required: true },
})

const showServicesDropdown = ref(false)
</script>
