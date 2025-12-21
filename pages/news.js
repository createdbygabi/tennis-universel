export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "ATP Finals 2024: Djokovic Claims Historic Victory",
      excerpt:
        "Novak Djokovic secures his seventh ATP Finals title in a thrilling final match against Carlos Alcaraz.",
      date: "Dec 12, 2024",
      category: "Tournament",
      image:
        "https://images.unsplash.com/photo-1622279457488639-0a8ddf5febb8?w=800&q=80",
    },
    {
      id: 2,
      title: "WTA Announces New Tournament Schedule for 2025",
      excerpt:
        "The WTA reveals an expanded calendar with new events across multiple continents.",
      date: "Dec 8, 2024",
      category: "News",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
    {
      id: 3,
      title: "Rising Stars to Watch in 2025 Season",
      excerpt:
        "A look at the young talents making waves in professional tennis.",
      date: "Dec 5, 2024",
      category: "Features",
      image:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
    },
    {
      id: 4,
      title: "Federer Announces Return to Tennis in Exhibition Match",
      excerpt:
        "The Swiss legend confirms his participation in a special exhibition event next year.",
      date: "Dec 1, 2024",
      category: "News",
    },
    {
      id: 5,
      title: "New Training Facilities Open in Major Cities",
      excerpt:
        "State-of-the-art tennis centers launch in New York, London, and Tokyo.",
      date: "Nov 28, 2024",
      category: "Features",
    },
    {
      id: 6,
      title: "Grand Slam Prize Money Increases Announced",
      excerpt:
        "All four major tournaments announce significant increases in prize money for 2025.",
      date: "Nov 25, 2024",
      category: "Tournament",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Actualités tennis
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Dernières actualités
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Restez informé des dernières actualités du monde du tennis
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all overflow-hidden group"
            >
              {article.image && (
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
