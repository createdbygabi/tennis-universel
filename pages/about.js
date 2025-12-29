import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.description")} />
        <meta property="og:title" content={t("about.title")} />
        <meta property="og:description" content={t("about.description")} />
        <meta
          property="og:url"
          content="https://www.tennisuniversel.com/about"
        />
      </Head>
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              {t("about.label")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              {t("about.mainTitle")}
            </h1>
          </div>

          <div className="max-w-none">
            {/* Intro Section - Dark Background */}
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 font-serif">
                {t("about.introTitle")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                {t("about.intro")}
              </p>
            </div>

            {/* First Section: Image Left, Text Right - Une équipe passionnée */}
            <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="/images/about-1.webp"
                    alt={t("about.team.title")}
                    className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 font-serif leading-tight">
                    {t("about.team.title")}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                    {t("about.team.description")}
                  </p>
                  <a
                    href="https://instagram.com/tennisuniversel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
                  >
                    <span>{t("about.team.button")}</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>

            {/* Second Section: Text Left, Image Right - Un média social */}
            <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 font-serif leading-tight">
                    {t("about.social.title")}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                    {t("about.social.description")}
                  </p>
                  <a
                    href="https://instagram.com/tennisuniversel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
                  >
                    <span>{t("about.social.button")}</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <img
                    src="/images/about-2.webp"
                    alt={t("about.social.title")}
                    className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </section>

            {/* Beyond Section */}
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 font-serif">
                {t("about.beyond.title")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                {t("about.beyond.description")}
              </p>
              <a
                href="https://instagram.com/tennisuniversel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-white text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>{t("about.social.button")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
