import { useState, useEffect } from "react";
import Head from "next/head";
import InstagramReel from "../components/InstagramReel";

export default function Interviews() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllReels();
  }, []);

  const fetchAllReels = async () => {
    try {
      setLoading(true);
      // Fetch all reels from the JSON file
      const response = await fetch("/api/instagram-reels?all=true");

      if (!response.ok) {
        throw new Error("Failed to fetch reels");
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        setReels([]);
        setError("Aucun reel trouvé");
        setLoading(false);
        return;
      }

      // Just use the reel URLs - Instagram will handle all the display
      const transformedReels = data.data.map((reel) => ({
        id: reel.id,
        reelUrl: reel.reelUrl,
      }));

      setReels(transformedReels);
      setError(null);
    } catch (err) {
      console.error("Error fetching Instagram reels:", err);
      setError("Impossible de charger les reels Instagram");
      setReels([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Toutes les interviews
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              Interviews exclusives
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Explorez notre collection complète de conversations exclusives
              avec des professionnels du tennis
            </p>
            <a
              href="https://instagram.com/tennisuniversel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Voir toutes les interviews sur Instagram</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl sm:rounded-2xl aspect-[9/16] animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error && reels.length === 0) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Toutes les interviews
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              Interviews exclusives
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              {error}
            </p>
            <a
              href="https://instagram.com/tennisuniversel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Voir sur Instagram</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Interviews - Tennis Universel</title>
        <meta
          name="description"
          content="Explorez notre collection complète d'interviews exclusives avec des professionnels du tennis. Des conversations authentiques avec des légendes et des étoiles montantes."
        />
        <meta property="og:title" content="Interviews - Tennis Universel" />
        <meta
          property="og:description"
          content="Explorez notre collection complète d'interviews exclusives avec des professionnels du tennis."
        />
        <meta
          property="og:url"
          content="https://www.tennisuniversel.com/interviews"
        />
      </Head>
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Toutes les interviews
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
              Interviews exclusives
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Explorez notre collection complète de conversations exclusives
              avec des professionnels du tennis
            </p>
            <a
              href="https://instagram.com/tennisuniversel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Voir sur Instagram</span>
            </a>
          </div>
          {reels.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
                {reels.map((reel) => (
                  <InstagramReel key={reel.id} reelUrl={reel.reelUrl} />
                ))}
              </div>
              <div className="text-center pt-8 sm:pt-12 border-t border-gray-200">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-serif">
                  Découvrez encore plus d'interviews
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Suivez-nous sur Instagram pour ne manquer aucune interview et
                  faire partie de la communauté Tennis Universel
                </p>
                <a
                  href="https://instagram.com/tennisuniversel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Suivez-nous sur Instagram</span>
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Aucun reel disponible pour le moment.
              </p>
              <a
                href="https://instagram.com/tennisuniversel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Voir sur Instagram</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
