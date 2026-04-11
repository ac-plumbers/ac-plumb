<template>
  <div class="mr-2 hidden items-center gap-x-3 xl:flex">
    <a
      :href="whatsappUrl"
      data-umami-event="lead_whatsapp_click"
      data-umami-event-placement="header"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-x-2 rounded-md px-3 py-2 text-lg font-medium text-green-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-800 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <IconWhatsAppMenu iconClass="size-6" aria-hidden="true" />
      <span class="hidden xl:inline">WhatsApp</span>
      <span class="sr-only">(opens in new tab)</span>
    </a>

    <GetAQuote
      variant="primary"
      text="Free Quote"
      size="md"
      display="full"
      :pulse="false"
      href="/contact-us"
      data-umami-event="lead_quote_click"
      data-umami-event-placement="header"
    />
  </div>
</template>

<script setup>
import IconWhatsAppMenu from '../../icons/IconWhatsAppMenu.vue'
import GetAQuote from '../../fundations/elements/GetAQuote.vue'
import { BUSINESS_CONFIG } from '../../../utils/businessConfig'

const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.mobilePhone.replace('+', '').replace(/\s/g, '')}?text=Hi%20AC%20Plumbers%2C%20I%20need%20help%20with%20my%20plumbing`
</script>
