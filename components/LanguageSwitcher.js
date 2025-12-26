import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function LanguageSwitcher({ isDark = false }) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (locale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  const currentLocale = i18n.language || "fr";

  // Clean toggle-style switcher
  return (
    <div className="flex items-center">
      <div
        className={`flex items-center rounded-full p-0.5 transition-all ${
          isDark
            ? "bg-white/10 backdrop-blur-sm border border-white/20"
            : "bg-gray-100 border border-gray-200"
        }`}
      >
        <button
          onClick={() => changeLanguage("fr")}
          className={`px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs sm:text-xs font-medium transition-all duration-200 min-w-[44px] sm:min-w-0 ${
            currentLocale === "fr"
              ? isDark
                ? "bg-white text-black shadow-sm"
                : "bg-black text-white shadow-sm"
              : isDark
              ? "text-white/70 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
          aria-label="Switch to French"
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs sm:text-xs font-medium transition-all duration-200 min-w-[44px] sm:min-w-0 ${
            currentLocale === "en"
              ? isDark
                ? "bg-white text-black shadow-sm"
                : "bg-black text-white shadow-sm"
              : isDark
              ? "text-white/70 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
