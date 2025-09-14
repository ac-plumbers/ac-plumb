<template>
  <form
    v-if="!showSummary"
    id="quote-form"
    class="mx-auto mt-12 max-w-lg rounded-2xl border border-primary-100 bg-background-00 p-8 shadow-2xl"
    @submit.prevent="handleSubmit"
    autocomplete="off"
  >
    <div class="mb-6 flex items-center justify-between">
      <span class="font-bold text-primary-600">Step {{ step }} of 4</span>
      <div class="flex gap-2">
        <span
          v-for="s in 4"
          :key="s"
          :class="
            s === step
              ? 'inline-block h-2 w-6 rounded bg-primary-600'
              : 'inline-block h-2 w-2 rounded bg-gray-300'
          "
        ></span>
      </div>
    </div>
    <div v-if="step === 1">
      <label class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >What service do you need?</label
      >
      <select
        class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        v-model="service"
        required
      >
        <option value="">Select a service</option>
        <option>Boiler Installation</option>
        <option>Bathroom Plumbing</option>
        <option>Emergency Callout</option>
        <option>Heating Repair</option>
        <option>Other</option>
      </select>
    </div>
    <div v-if="step === 2">
      <label class="mb-2 block font-semibold">Property Details</label>
      <input
        class="mb-2 w-full rounded border p-2"
        placeholder="Postcode"
        v-model="postcode"
        required
      />
      <input
        class="mb-2 w-full rounded border p-2"
        placeholder="Property Type (e.g. Flat, House)"
        v-model="propertyType"
        required
      />
      <input
        class="w-full rounded border p-2"
        placeholder="Bedrooms"
        type="number"
        min="1"
        v-model="bedrooms"
        required
      />
    </div>
    <div v-if="step === 2">
      <label class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >Property Details</label
      >
      <input
        class="mb-3 w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        placeholder="Postcode"
        v-model="postcode"
        required
      />
      <input
        class="mb-3 w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        placeholder="Property Type (e.g. Flat, House)"
        v-model="propertyType"
        required
      />
      <input
        class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        placeholder="Bedrooms"
        type="number"
        min="1"
        v-model="bedrooms"
        required
      />
    </div>
    <div v-if="step === 3">
      <label class="mb-2 block font-semibold">Any extras?</label>
      <div class="flex flex-col gap-2">
        <label
          ><input type="checkbox" value="Smart Thermostat" v-model="extras" />
          Smart Thermostat</label
        >
        <label
          ><input type="checkbox" value="Powerflush" v-model="extras" />
          Powerflush</label
        >
        <label
          ><input type="checkbox" value="Radiator Install" v-model="extras" />
          Radiator Install</label
        >
      </div>
    </div>
    <div v-if="step === 3">
      <label class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >Any extras?</label
      >
      <div class="flex flex-col gap-3">
        <label class="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            value="Smart Thermostat"
            v-model="extras"
            class="h-5 w-5 rounded accent-accent-500 focus:ring-accent-500"
          />
          <span class="font-inconsolata text-base">Smart Thermostat</span>
        </label>
        <label class="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            value="Powerflush"
            v-model="extras"
            class="h-5 w-5 rounded accent-accent-500 focus:ring-accent-500"
          />
          <span class="font-inconsolata text-base">Powerflush</span>
        </label>
        <label class="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            value="Radiator Install"
            v-model="extras"
            class="h-5 w-5 rounded accent-accent-500 focus:ring-accent-500"
          />
          <span class="font-inconsolata text-base">Radiator Install</span>
        </label>
      </div>
    </div>
    <div v-if="step === 4">
      <label class="mb-2 block font-semibold">Contact Details</label>
      <input
        class="mb-2 w-full rounded border p-2"
        placeholder="Name"
        v-model="name"
        required
      />
      <input
        class="mb-2 w-full rounded border p-2"
        placeholder="Phone"
        v-model="phone"
        required
      />
      <input
        class="w-full rounded border p-2"
        placeholder="Email"
        type="email"
        v-model="email"
        required
      />
    </div>
    <div v-if="step === 4">
      <label class="mb-3 block font-lato text-lg font-semibold text-primary-700"
        >Contact Details</label
      >
      <input
        class="mb-3 w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        placeholder="Name"
        v-model="name"
        required
      />
      <input
        class="mb-3 w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        placeholder="Phone"
        v-model="phone"
        required
      />
      <input
        class="w-full rounded-lg border border-primary-200 bg-background-50 p-3 text-base transition focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
        placeholder="Email"
        type="email"
        v-model="email"
        required
      />
    </div>
    <div class="mt-8 flex flex-col items-center border-t pt-6">
      <div class="mb-4 text-lg font-bold text-primary-700">
        Estimated Quote:
        <span class="text-accent-500">£{{ estimatedQuote }}</span>
      </div>
      <div class="flex w-full justify-between">
        <button
          type="button"
          class="rounded-lg bg-gray-100 px-5 py-2 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-200 focus:ring-2 focus:ring-primary-300 focus:outline-none"
          :disabled="step === 1"
          @click="back"
        >
          Back
        </button>
        <button
          v-if="step < 4"
          type="button"
          class="rounded-lg bg-primary-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 focus:outline-none"
          @click="next"
        >
          Next
        </button>
        <button
          v-else
          type="submit"
          class="rounded-lg bg-accent-500 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-accent-600 focus:ring-2 focus:ring-accent-300 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
    <!-- Netlify hidden form moved outside main form below -->
  </form>

  <!-- Quote summary after submission -->
  <div
    v-if="showSummary"
    id="quote-form"
    class="mx-auto mt-8 max-w-lg rounded-2xl border border-accent-200 bg-accent-50 p-8 shadow-lg"
  >
    <h2 class="mb-4 text-2xl font-bold text-primary-700">Your Quote Summary</h2>
    <ul class="mb-4 space-y-2 text-lg">
      <li><strong>Service:</strong> {{ service }}</li>
      <li>
        <strong>Property:</strong> {{ propertyType }}, {{ bedrooms }} bedrooms,
        {{ postcode }}
      </li>
      <li>
        <strong>Extras:</strong>
        {{ extras.length ? extras.join(", ") : "None" }}
      </li>
      <li><strong>Name:</strong> {{ name }}</li>
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <div class="mt-6 rounded-lg bg-white p-4 text-center shadow">
      <span class="text-lg font-semibold text-primary-700"
        >Estimated Quote:</span
      >
      <div class="mt-2 text-3xl font-bold text-accent-500">
        £{{ estimatedQuote }}
      </div>
      <p class="mt-2 text-sm text-gray-500">
        This is an instant estimate. We’ll confirm your quote by email or phone.
      </p>
    </div>
    <button
      class="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-background-00 shadow-md transition hover:bg-primary-700 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:outline-none"
      @click="resetForm"
    >
      Start a New Quote
    </button>
  </div>
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
