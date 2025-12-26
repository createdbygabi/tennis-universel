import { useState, useEffect } from "react";
import InstagramReel from "./InstagramReel";
import Link from "next/link";

export default function InstagramReelsSection({
  limit = null,
  showViewMore = false,
}) {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReels();
  }, []);

  const fetchReels = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/instagram-reels");

      if (!response.ok) {
        throw new Error("Failed to fetch reels");
      }

      const data = await response.json();

      // Check if we have data
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

      // Apply limit if specified
      const finalReels = limit
        ? transformedReels.slice(0, limit)
        : transformedReels;
      setReels(finalReels);
      setError(null);
    } catch (err) {
      console.error("Error fetching Instagram reels:", err);
      setError("Impossible de charger les reels Instagram");
      // Set empty array so component doesn't break
      setReels([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-40 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-serif leading-[1.05] tracking-tight">
              Interviews
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl leading-relaxed mb-12 font-light tracking-tight">
              Des lives Instagram avec des acteurs et actrices du monde
              tennistique qui racontent leurs histoires liées à la balle jaune
            </p>
            <a
              href="/interviews"
              className="inline-flex items-center space-x-3 text-gray-900 hover:text-black font-semibold text-lg transition-colors group"
            >
              <span>Explorer</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl aspect-[9/16] animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error && reels.length === 0) {
    return (
      <section className="py-40 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-serif leading-[1.05] tracking-tight">
              Interviews
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl leading-relaxed mb-12 font-light tracking-tight">
              Des lives Instagram avec des acteurs et actrices du monde
              tennistique qui racontent leurs histoires liées à la balle jaune
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
            <p className="text-gray-600 text-lg mb-4">{error}</p>
            <p className="text-gray-500 text-sm mb-6">
              Pour voir les dernières interviews, visitez{" "}
              <a
                href="https://instagram.com/tennisuniversel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline font-medium"
              >
                @tennisuniversel
              </a>{" "}
              sur Instagram
            </p>
            <a
              href="https://instagram.com/tennisuniversel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Voir sur Instagram</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-40 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-serif leading-[1.05] tracking-tight">
            Interviews
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl leading-relaxed mb-12 font-light tracking-tight">
            Des lives Instagram avec des acteurs et actrices du monde
            tennistique qui racontent leurs histoires liées à la balle jaune
          </p>
          <a
            href="/interviews"
            className="inline-flex items-center space-x-3 text-gray-900 hover:text-black font-semibold text-lg transition-colors group"
          >
            <span>Explorer</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
        {reels.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {reels.map((reel) => (
                <InstagramReel key={reel.id} reelUrl={reel.reelUrl} />
              ))}
            </div>
            {showViewMore && limit && (
              <div className="text-center">
                <Link
                  href="/interviews"
                  className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all transform hover:scale-105"
                >
                  <span>Voir plus</span>
                  <svg
                    className="w-5 h-5"
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
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              Aucun reel disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
