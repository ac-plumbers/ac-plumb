export interface BusinessContact {
  name: string;
  nameSmall: string;
  mobilePhone: string;
  landline: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  serviceRadius: string; // in meters
  website: string;
  ogImage: string;
  logoImage: string;
  vatNumber?: string;
  companyNumber?: string;
  paymentMethods?: string[];
}

export const BUSINESS_CONFIG: BusinessContact = {
  name: "AC Plumbers Ltd.",
  nameSmall: "AC Plumbers",
  mobilePhone: "+44 7535 653 850",
  landline: "+44 1273 680 731",
  email: "info@acplumb.co.uk",
  address: {
    street: "21j Campbell Road",
    city: "Brighton",
    postcode: "BN1 4QD",
    country: "GB",
  },
  geo: {
    latitude: "50.8225",
    longitude: "-0.1372",
  },
  serviceRadius: "50000",
  website: "https://acplumb.co.uk",
  ogImage:
    "https://acplumb.co.uk/og/ac-plumbers-ltd-brighton-plumbing-heating-renewable-services-og-image.png",
  logoImage: "https://acplumb.co.uk/og/ac-plumbers-ltd-logo-brighton.png",
  vatNumber: "300995607",
  companyNumber: "10187057",
  paymentMethods: ["Bank Transfer"],
};
// Helper functions for accessibility and consistency
export const formatPhoneForDisplay = (phone: string): string => {
  return phone.replace("+44", "0");
};

export const formatPhoneForTel = (phone: string): string => {
  return phone;
};

export const getFullAddress = (): string => {
  const { address } = BUSINESS_CONFIG;
  return `${address.street}, ${address.city}, ${address.postcode}`;
};

// Get the current year as a string
export const fullYear = (): string => {
  return new Date().getFullYear().toString();
};
