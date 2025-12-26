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
        console.error(
          "API response not ok:",
          response.status,
          response.statusText
        );
        throw new Error(`Failed to fetch reels: ${response.status}`);
      }

      const data = await response.json();

      // Check if we have data
      if (!data || !data.data || data.data.length === 0) {
        console.log("No reels data found:", data);
        setReels([]);
        setError(null); // Don't show error, just show empty state
        setLoading(false);
        return;
      }

      // Just use the reel URLs - Instagram will handle all the display
      const transformedReels = data.data.map((reel) => ({
        id: reel.id || reel.shortcode || `reel-${Math.random()}`,
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
      setError(null); // Don't show error, just show empty state
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

  // Don't show error state, just show empty section if no reels
  // This prevents the page from breaking if API fails

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
