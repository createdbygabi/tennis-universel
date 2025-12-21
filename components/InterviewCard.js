export default function InterviewCard({ interview, featured = false }) {
  return (
    <a
      href={interview.instagramUrl || "https://instagram.com/tennisuniversel"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 ${
        featured ? "transform hover:-translate-y-2" : ""
      }`}
    >
      <div
        className={`relative ${
          featured ? "h-80" : "h-64"
        } bg-gray-100 overflow-hidden`}
      >
        {interview.image ? (
          <img
            src={interview.image}
            alt={interview.guest}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        )}
        {interview.isLive && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-2 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>EN DIRECT</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-2 text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-sm font-medium">Voir sur Instagram</span>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {interview.date}
          </span>
          {interview.duration && (
            <span className="text-xs text-gray-500 font-medium">
              {interview.duration}
            </span>
          )}
        </div>
        <h3
          className={`font-bold text-gray-900 mb-4 group-hover:text-black transition-colors font-serif leading-tight ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {interview.guest}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed line-clamp-2 tracking-tight">
          {interview.description}
        </p>
      </div>
    </a>
  );
}
