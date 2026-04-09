<template>
  <div class="mr-2 hidden items-center gap-x-3 xl:flex">
    <a
      href="https://wa.me/447123456789?text=Hi%20AC%20Plumbers%2C%20I%20need%20help%20with%20my%20plumbing"
      data-umami-event="lead_whatsapp_click"
      data-umami-event-placement="header"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-x-2 rounded-md px-3 py-2 text-lg font-medium text-green-700 transition-colors duration-200 hover:bg-green-50 hover:text-green-800 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
      title="Chat with us on WhatsApp"
    >
      <IconWhatsAppMenu iconClass="size-6" />
      <span class="hidden xl:inline">WhatsApp</span>
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
</script>
