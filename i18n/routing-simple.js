// ALTERNATIVE SIMPLER APPROACH (without locale in URL)
// Use this if you prefer /interviews instead of /fr/interviews

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localeDetection: true,
  // This removes locale from URL - URLs stay as /interviews, /about, etc.
  localePrefix: "as-needed", // or "never" to completely hide locale
});

