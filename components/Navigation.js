import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Pages where logo should always be black
  const alwaysBlackLogoPages = ["/interviews", "/about"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if logo should be black
  const shouldUseBlackLogo =
    alwaysBlackLogoPages.includes(router.pathname) || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseBlackLogo
          ? "bg-white shadow-md backdrop-blur-md bg-white/95"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src={
                shouldUseBlackLogo
                  ? "/images/logo-black.png"
                  : "/images/logo.png"
              }
              alt="TennisUniversel Logo"
              className="h-6 w-auto transform group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                shouldUseBlackLogo
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/interviews"
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                shouldUseBlackLogo
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              Interviews
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                shouldUseBlackLogo
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              À propos
            </Link>
            <a
              href="https://instagram.com/tennisuniversel"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-6 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${
                shouldUseBlackLogo
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Suivez-nous sur Instagram
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              shouldUseBlackLogo
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Ouvrir le menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/interviews"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Interviews
              </Link>
              <Link
                href="/news"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <a
                href="https://instagram.com/tennisuniversel"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-900 transition-colors text-center"
              >
                Suivre sur Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
