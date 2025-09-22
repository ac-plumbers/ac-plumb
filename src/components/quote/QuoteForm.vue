<template>
  <section aria-labelledby="quote-form-heading">
    <!-- SEO-friendly heading always visible -->
    <h2 id="quote-form-heading" class="sr-only">
      Request a Quote for Plumbing Services
    </h2>

    <form
      v-if="!showSummary"
      id="quote-form"
      class="mx-auto mt-12 flex min-h-[540px] w-full max-w-lg flex-col justify-start rounded-2xl border border-primary-100 bg-background-00 p-8 shadow-2xl"
      @submit.prevent="handleSubmit"
      autocomplete="on"
      role="form"
      aria-label="Multi-step quote request form"
    >
      <!-- Progress indicator with proper ARIA -->
      <nav aria-label="Form progress" class="mb-8">
        <ol class="mx-auto flex w-full max-w-lg items-center justify-between">
          <li
            v-for="(label, index) in stepLabels"
            :key="index + 1"
            class="relative flex flex-1 flex-col items-center"
          >
            <div
              :class="[
                'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300',
                step === index + 1
                  ? 'scale-110 border-primary-600 bg-primary-600 text-white shadow-lg'
                  : step > index + 1
                    ? 'border-accent-500 bg-accent-500 text-white'
                    : 'border-gray-300 bg-gray-100 text-gray-400',
              ]"
              :aria-current="step === index + 1 ? 'step' : false"
            >
              <span class="font-bold" aria-hidden="true">{{ index + 1 }}</span>
            </div>
            <span
              class="mt-2 text-xs font-semibold"
              :class="step === index + 1 ? 'text-primary-600' : 'text-gray-400'"
              :id="`step-${index + 1}-label`"
            >
              {{ label }}
            </span>
            <div
              v-if="index < 3"
              class="absolute top-5 left-full flex h-1 w-full items-center"
              aria-hidden="true"
            >
              <div
                :class="[
                  'h-1 w-full transition-all duration-300',
                  step > index + 1 ? 'bg-accent-500' : 'bg-gray-200',
                ]"
              ></div>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Step 1: Service Selection -->
      <fieldset v-if="step === 1" class="border-0">
        <legend
          class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >
          What service do you need?
        </legend>
        <label for="service-select" class="sr-only"
          >Select a plumbing service</label
        >
        <select
          id="service-select"
          class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
          v-model="service"
          required
          autocomplete="off"
          aria-describedby="service-help"
        >
          <option value="">Select a service</option>
          <option value="Boiler Installation">Boiler Installation</option>
          <option value="Bathroom Plumbing">Bathroom Plumbing</option>
          <option value="Emergency Callout">Emergency Callout</option>
          <option value="Heating Repair">Heating Repair</option>
          <option value="Other">Other</option>
        </select>
        <div id="service-help" class="mt-1 text-sm text-gray-600">
          Choose the type of plumbing service you need
        </div>
      </fieldset>

      <!-- Step 2: Property Details -->
      <fieldset v-if="step === 2" class="border-0">
        <legend
          class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >
          Property Details
        </legend>
        <div class="space-y-3">
          <div>
            <label
              for="postcode"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Postcode *
            </label>
            <input
              id="postcode"
              class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              placeholder="e.g. BN1 1AA"
              v-model="postcode"
              required
              autocomplete="postal-code"
              aria-describedby="postcode-help"
            />
            <div id="postcode-help" class="mt-1 text-sm text-gray-600">
              Enter your property's postcode for accurate pricing
            </div>
          </div>

          <div>
            <label
              for="property-type"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Property Type *
            </label>
            <input
              id="property-type"
              class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              placeholder="e.g. Flat, House, Maisonette"
              v-model="propertyType"
              required
              autocomplete="off"
              aria-describedby="property-help"
            />
            <div id="property-help" class="mt-1 text-sm text-gray-600">
              Specify if it's a flat, house, or other property type
            </div>
          </div>

          <div>
            <label
              for="bedrooms"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Number of Bedrooms *
            </label>
            <input
              id="bedrooms"
              class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              placeholder="e.g. 2"
              type="number"
              min="1"
              max="10"
              v-model="bedrooms"
              required
              autocomplete="off"
              aria-describedby="bedrooms-help"
            />
            <div id="bedrooms-help" class="mt-1 text-sm text-gray-600">
              Number of bedrooms affects pricing for some services
            </div>
          </div>
        </div>
      </fieldset>

      <!-- Step 3: Extras -->
      <fieldset v-if="step === 3" class="border-0">
        <legend
          class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >
          Any additional services?
        </legend>
        <div
          class="flex flex-col gap-3"
          role="group"
          aria-describedby="extras-help"
        >
          <label
            class="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
          >
            <input
              type="checkbox"
              value="Smart Thermostat"
              v-model="extras"
              class="h-5 w-5 rounded accent-accent-500 focus:ring-accent-500"
              aria-describedby="thermostat-price"
            />
            <span class="flex-1">
              <span class="font-inconsolata text-base font-medium"
                >Smart Thermostat</span
              >
              <span id="thermostat-price" class="block text-sm text-gray-600"
                >+£180</span
              >
            </span>
          </label>

          <label
            class="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
          >
            <input
              type="checkbox"
              value="Powerflush"
              v-model="extras"
              class="h-5 w-5 rounded accent-accent-500 focus:ring-accent-500"
              aria-describedby="powerflush-price"
            />
            <span class="flex-1">
              <span class="font-inconsolata text-base font-medium"
                >Powerflush</span
              >
              <span id="powerflush-price" class="block text-sm text-gray-600"
                >+£350</span
              >
            </span>
          </label>

          <label
            class="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
          >
            <input
              type="checkbox"
              value="Radiator Install"
              v-model="extras"
              class="h-5 w-5 rounded accent-accent-500 focus:ring-accent-500"
              aria-describedby="radiator-price"
            />
            <span class="flex-1">
              <span class="font-inconsolata text-base font-medium"
                >Radiator Install</span
              >
              <span id="radiator-price" class="block text-sm text-gray-600"
                >+£120</span
              >
            </span>
          </label>
        </div>
        <div id="extras-help" class="mt-2 text-sm text-gray-600">
          Select any additional services you need (optional)
        </div>
      </fieldset>

      <!-- Step 4: Contact Details -->
      <fieldset v-if="step === 4" class="border-0">
        <legend
          class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >
          Contact Details
        </legend>
        <div class="space-y-3">
          <div>
            <label
              for="customer-name"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Full Name *
            </label>
            <input
              id="customer-name"
              class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              placeholder="Your full name"
              v-model="name"
              required
              autocomplete="name"
            />
          </div>

          <div>
            <label
              for="customer-phone"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              id="customer-phone"
              class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              placeholder="Your phone number"
              type="tel"
              v-model="phone"
              required
              autocomplete="tel"
            />
          </div>

          <div>
            <label
              for="customer-email"
              class="mb-1 block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              id="customer-email"
              class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              placeholder="Your email address"
              type="email"
              v-model="email"
              required
              autocomplete="email"
            />
          </div>
        </div>
      </fieldset>

      <!-- Quote Display and Navigation -->
      <div class="mt-8 flex flex-col items-center border-t pt-6">
        <div
          class="mb-4 text-lg font-bold text-primary-700"
          role="status"
          aria-live="polite"
        >
          Estimated Quote:
          <span class="text-accent-500">£{{ estimatedQuote }}</span>
        </div>
        <div class="flex w-full justify-between gap-4">
          <button
            type="button"
            class="rounded-lg bg-gray-100 px-5 py-2 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="step === 1"
            @click="back"
            :aria-label="
              step > 1
                ? `Go back to step ${step - 1}: ${stepLabels[step - 2]}`
                : 'Cannot go back'
            "
          >
            Back
          </button>
          <button
            v-if="step < 4"
            type="button"
            class="rounded-lg bg-primary-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 focus:outline-none"
            @click="next"
            :aria-label="`Continue to step ${step + 1}: ${stepLabels[step]}`"
          >
            Next
          </button>
          <button
            v-else
            type="submit"
            class="rounded-lg bg-accent-500 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-accent-600 focus:ring-2 focus:ring-accent-300 focus:outline-none"
            aria-label="Submit quote request"
          >
            Get My Quote
          </button>
        </div>
      </div>
    </form>

    <!-- Quote Summary -->
    <div
      v-if="showSummary"
      id="quote-form"
      class="mx-auto mt-8 flex min-h-[540px] w-full max-w-lg flex-col justify-start rounded-2xl border border-accent-200 bg-accent-50 p-8 shadow-lg"
      role="region"
      aria-labelledby="quote-summary-heading"
    >
      <h2
        id="quote-summary-heading"
        class="mb-4 text-2xl font-bold text-primary-700"
      >
        Your Quote Summary
      </h2>
      <!-- Summary content remains the same but with proper semantic structure -->
      <dl class="mb-4 space-y-2 text-lg">
        <div>
          <dt class="inline font-semibold">Service:</dt>
          <dd class="inline">{{ service }}</dd>
        </div>
        <div>
          <dt class="inline font-semibold">Property:</dt>
          <dd class="inline">
            {{ propertyType }}, {{ bedrooms }} bedrooms, {{ postcode }}
          </dd>
        </div>
        <div>
          <dt class="inline font-semibold">Extras:</dt>
          <dd class="inline">
            {{ extras.length ? extras.join(", ") : "None" }}
          </dd>
        </div>
        <div>
          <dt class="inline font-semibold">Name:</dt>
          <dd class="inline">{{ name }}</dd>
        </div>
        <div>
          <dt class="inline font-semibold">Phone:</dt>
          <dd class="inline">{{ phone }}</dd>
        </div>
        <div>
          <dt class="inline font-semibold">Email:</dt>
          <dd class="inline">{{ email }}</dd>
        </div>
      </dl>

      <div
        class="mt-6 rounded-lg bg-white p-4 text-center shadow"
        role="region"
        aria-labelledby="final-quote"
      >
        <div id="final-quote" class="text-lg font-semibold text-primary-700">
          Estimated Quote:
        </div>
        <div class="mt-2 text-3xl font-bold text-accent-500">
          £{{ estimatedQuote }}
        </div>
        <p class="mt-2 text-sm text-gray-500">
          This is an instant estimate. We'll confirm your quote by email or
          phone.
        </p>
      </div>

      <button
        class="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-background-00 shadow-md transition hover:bg-primary-700 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none"
        @click="resetForm"
        aria-label="Start a new quote request"
      >
        Start a New Quote
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuoteForm",
  data() {
    return {
      step: 1,
      service: "",
      postcode: "",
      propertyType: "",
      bedrooms: "",
      extras: [],
      name: "",
      phone: "",
      email: "",
      showSummary: false,
      stepLabels: ["Service", "Property", "Extras", "Contact"],
    };
  },
  computed: {
    estimatedQuote() {
      // Simple pricing logic (customize as needed)
      let base = 0;
      switch (this.service) {
        case "Boiler Installation":
          base = 1800;
          break;
        case "Bathroom Plumbing":
          base = 600;
          break;
        case "Emergency Callout":
          base = 120;
          break;
        case "Heating Repair":
          base = 250;
          break;
        case "Other":
          base = 100;
          break;
        default:
          base = 0;
      }
      // Extras pricing
      let extraTotal = 0;
      if (this.extras.includes("Smart Thermostat")) extraTotal += 180;
      if (this.extras.includes("Powerflush")) extraTotal += 350;
      if (this.extras.includes("Radiator Install")) extraTotal += 120;
      // Bedrooms can affect price (optional)
      let bedroomsAdj = 0;
      if (this.bedrooms && !isNaN(Number(this.bedrooms))) {
        bedroomsAdj = (Number(this.bedrooms) - 1) * 40;
      }
      return base + extraTotal + bedroomsAdj;
    },
  },
  methods: {
    next() {
      if (this.step < 4) this.step++;
    },
    back() {
      if (this.step > 1) this.step--;
    },
    async handleSubmit() {
      // Build form data
      const formData = new FormData();
      formData.append("form-name", "quote");
      formData.append("service", this.service);
      formData.append("postcode", this.postcode);
      formData.append("propertyType", this.propertyType);
      formData.append("bedrooms", this.bedrooms);
      formData.append("extras", this.extras.join(", "));
      formData.append("name", this.name);
      formData.append("phone", this.phone);
      formData.append("email", this.email);
      formData.append("estimatedQuote", this.estimatedQuote);

      // Submit to Netlify via AJAX
      await fetch("/", {
        method: "POST",
        headers: { Accept: "application/x-www-form-urlencoded" },
        body: new URLSearchParams([...formData]),
      });

      // Show the quote summary to the user
      this.showSummary = true;
    },
    resetForm() {
      this.step = 1;
      this.service = "";
      this.postcode = "";
      this.propertyType = "";
      this.bedrooms = "";
      this.extras = [];
      this.name = "";
      this.phone = "";
      this.email = "";
      this.showSummary = false;
      // Optionally scroll to the form
      this.$nextTick(() => {
        const el = document.getElementById("quote-form");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
};
</script>
