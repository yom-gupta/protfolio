// utils/analytics.js

export const trackEvent = (action, category, label, value = null) => {
  if (typeof window !== "undefined" && window.gtag) {
    const params = {
      event_category: category,
      event_label: label,
    };
    if (value !== null) {
      params.value = value;
    }
    window.gtag("event", action, params);
  }
};
