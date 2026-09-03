export function buildWhatsAppMessage(options: {
  tourTitle?: string;
  destinationTitle?: string;
  defaultMessage?: string;
}) {
  if (options.tourTitle) {
    return `Hi Good Secrets Safaris, I am interested in ${options.tourTitle}. Please share availability and current pricing.`;
  }
  if (options.destinationTitle) {
    return `Hi Good Secrets Safaris, I am planning a trip to ${options.destinationTitle}. Please recommend suitable safaris, dates and current pricing.`;
  }
  return options.defaultMessage || "Hello Good Secrets Safaris, I'd like to enquire about a safari.";
}
