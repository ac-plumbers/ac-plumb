<template>
  <nav
    aria-label="Primary navigation"
    class="hidden xl:flex xl:flex-1 xl:items-center xl:justify-center"
  >
    <ul
      role="list"
      class="flex items-center gap-x-4 text-lg font-medium xl:gap-x-4"
      style="list-style: none; margin: 0; padding: 0"
    >
      <li>
        <NavLink href="/" :isActiveLink="isActiveLink">Home</NavLink>
      </li>

      <!-- Services Dropdown -->
      <li
        class="relative"
        @mouseenter="showServicesDropdown = true"
        @mouseleave="showServicesDropdown = false"
        @focusout="handleServicesBlur"
      >
        <button
          ref="servicesButton"
          type="button"
          :class="[
            'flex items-center gap-x-1 rounded-md px-2 py-1 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:outline-none',
            isInServicesSection()
              ? 'bg-primary-600 text-background-100 shadow-sm'
              : 'text-text-00 hover:text-primary-600',
          ]"
          :aria-expanded="showServicesDropdown ? 'true' : 'false'"
          aria-controls="services-dropdown"
          @click="toggleServicesDropdown"
          @keydown.escape="closeServicesDropdown"
        >
          Services
          <IconMenuServices />
        </button>

        <ul
          v-show="showServicesDropdown"
          id="services-dropdown"
          role="list"
          class="absolute top-full left-0 z-10 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-900/5"
          style="list-style: none; margin: 0; padding: 0.5rem 0"
        >
          <li>
            <a
              href="/services"
              :aria-current="isActiveLink('/services') ? 'page' : undefined"
              class="block border-b border-gray-100 px-4 py-2 text-sm font-medium text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              All Services
            </a>
          </li>
          <li>
            <a
              href="/services/gas-boiler-installation"
              :aria-current="
                isActiveLink('/services/gas-boiler-installation')
                  ? 'page'
                  : undefined
              "
              class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              Gas Boiler Installation
            </a>
          </li>
          <li>
            <a
              href="/services/boiler-servicing-and-repair"
              :aria-current="
                isActiveLink('/services/boiler-servicing-and-repair')
                  ? 'page'
                  : undefined
              "
              class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              Boiler Servicing &amp; Repairs
            </a>
          </li>
          <li>
            <a
              href="/services/all-aspects-of-plumbing-heating-and-gas"
              :aria-current="
                isActiveLink(
                  '/services/all-aspects-of-plumbing-heating-and-gas',
                )
                  ? 'page'
                  : undefined
              "
              class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              Plumbing
            </a>
          </li>
          <li>
            <a
              href="/services/central-heating-installation"
              :aria-current="
                isActiveLink('/services/central-heating-installation')
                  ? 'page'
                  : undefined
              "
              class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              Heating Services
            </a>
          </li>
          <li role="presentation" class="my-1">
            <hr class="border-gray-200" aria-hidden="true" />
          </li>
          <li>
            <a
              href="/services/gas-safety-checks-cp12"
              :aria-current="
                isActiveLink('/services/gas-safety-checks-cp12')
                  ? 'page'
                  : undefined
              "
              class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              Gas Safety Checks (CP12)
            </a>
          </li>
          <li>
            <a
              href="/services/renewable-air-source-heat-pump"
              :aria-current="
                isActiveLink('/services/renewable-air-source-heat-pump')
                  ? 'page'
                  : undefined
              "
              class="block px-4 py-2 text-sm text-text-00 hover:bg-accent-500/10 hover:text-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none focus-visible:ring-inset"
              @click="closeServicesDropdown"
            >
              Air Source Heat Pumps
            </a>
          </li>
        </ul>
      </li>

      <li>
        <NavLink href="/about-us" :isActiveLink="isActiveLink">About</NavLink>
      </li>
      <li>
        <NavLink href="/contact-us" :isActiveLink="isActiveLink"
          >Contact</NavLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import IconMenuServices from "../../icons/IconMenuServices.vue";
import NavLink from "./NavLink.vue";

function onPathChange() {
  requestAnimationFrame(() => snapPill(true));
}

const props = defineProps({
  isActiveLink: { type: Function, required: true },
  isInServicesSection: { type: Function, required: true },
});

const showServicesDropdown = ref(false);
const servicesButton = ref(null);

function toggleServicesDropdown() {
  showServicesDropdown.value = !showServicesDropdown.value;
}

function closeServicesDropdown() {
  showServicesDropdown.value = false;
}

function handleServicesBlur(e) {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    showServicesDropdown.value = false;
  }
}
</script>
<style></style>
