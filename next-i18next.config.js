module.exports = {
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    localeDetection: true, // Automatically detect user's language
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
