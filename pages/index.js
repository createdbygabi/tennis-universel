import { useState } from "react";
import InterviewCard from "../components/InterviewCard";
import InstagramReelsSection from "../components/InstagramReelsSection";

export default function Home() {
  const [latestInterviews] = useState([
    {
      id: 1,
      guest: "Rafael Nadal",
      date: "Dec 15, 2024",
      description:
        "Exclusive conversation about his career, training methods, and future plans in tennis.",
      isLive: true,
      instagramUrl: "https://instagram.com/tennisuniversel",
      image:
        "https://images.unsplash.com/photo-1622279457488639-0a8ddf5febb8?w=800&q=80",
    },
    {
      id: 2,
      guest: "Novak Djokovic",
      date: "Dec 10, 2024",
      description:
        "Deep dive into his mental preparation and championship mindset that led to his success.",
      duration: "45 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
    {
      id: 3,
      guest: "Iga Świątek",
      date: "Dec 5, 2024",
      description:
        "World number one shares insights on her training routine and goals for the upcoming season.",
      duration: "38 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
      image:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
    },
  ]);

  const [recentInterviews] = useState([
    {
      id: 4,
      guest: "Carlos Alcaraz",
      date: "Nov 28, 2024",
      description:
        "Young champion talks about his rapid rise and future ambitions.",
      duration: "42 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 5,
      guest: "Coco Gauff",
      date: "Nov 20, 2024",
      description:
        "Rising star discusses her journey and aspirations in professional tennis.",
      duration: "35 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 6,
      guest: "Serena Williams",
      date: "Nov 15, 2024",
      description:
        "Legendary player reflects on her incredible career and legacy in tennis.",
      duration: "55 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 7,
      guest: "Daniil Medvedev",
      date: "Nov 10, 2024",
      description:
        "Discussing his unique playing style and tournament strategies.",
      duration: "40 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
  ]);

  const [latestNews] = useState([
    {
      id: 1,
      title: "ATP Finals 2024: Djokovic Claims Historic Victory",
      excerpt:
        "Novak Djokovic secures his seventh ATP Finals title in a thrilling final match.",
      date: "Dec 12, 2024",
      category: "Tournament",
    },
    {
      id: 2,
      title: "WTA Announces New Tournament Schedule for 2025",
      excerpt:
        "The WTA reveals an expanded calendar with new events across multiple continents.",
      date: "Dec 8, 2024",
      category: "News",
    },
    {
      id: 3,
      title: "Rising Stars to Watch in 2025 Season",
      excerpt:
        "A look at the young talents making waves in professional tennis.",
      date: "Dec 5, 2024",
      category: "Features",
    },
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Height */}
      <section className="relative h-screen flex items-center px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-black/40"></div> */}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Headline */}
            <div className="text-white">
              <div className="inline-block mb-6">
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Dernières interviews
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 leading-[1.05] font-serif tracking-tight">
                Tennis Universel
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed tracking-tight font-light">
                Découvrez nos interviews exclusives avec des légendes du tennis,
                des étoiles montantes et des experts de l'industrie
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#latest-interviews"
                  className="bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl tracking-tight"
                >
                  <span>Explorer les interviews</span>
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
                </a>
                <a
                  href="https://instagram.com/tennisuniversel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-3 tracking-tight"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Suivez-nous</span>
                </a>
              </div>
            </div>

            {/* Right Side - Featured Interview Preview */}
            {/* <div className="grid grid-cols-2 gap-4">
              {latestInterviews.slice(0, 2).map((interview, index) => (
                <div
                  key={interview.id}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  {interview.isLive && (
                    <div className="inline-flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      <span>EN DIRECT</span>
                    </div>
                  )}
                  <h3 className="text-white font-bold text-lg mb-2">
                    {interview.guest}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {interview.description}
                  </p>
                  <a
                    href={interview.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
                  >
                    <span>Voir l'interview</span>
                    <svg
                      className="w-4 h-4"
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
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Instagram Reels Section - Last 3 Interviews */}
      <InstagramReelsSection />

      {/* About Section */}
      <section className="py-40 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 block">
                À propos
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-serif leading-[1.05] tracking-tight">
                Un média social
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-10 font-light tracking-tight">
                Un média passionné et animé par 2 questions : Comment le tennis
                influence-t-il la société ? Comment la société influence-t-elle
                le tennis ?
              </p>
              <a
                href="/about"
                className="inline-flex items-center space-x-3 text-gray-900 hover:text-black font-semibold text-lg transition-colors group"
              >
                <span>En savoir plus</span>
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
            <div className="grid grid-cols-2 gap-6">
              {latestInterviews.slice(0, 2).map((interview) => (
                <InterviewCard
                  key={interview.id}
                  interview={interview}
                  featured={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Interviews Grid */}
      <section className="py-40 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-serif leading-[1.05] tracking-tight">
              Plus d'interviews
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light tracking-tight mb-12">
              Explorez nos archives de conversations exclusives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-40 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-serif leading-[1.05] tracking-tight">
              Actualités
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light tracking-tight">
              Restez informé des dernières actualités du monde du tennis
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <div className="p-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors font-serif leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed tracking-tight">
                    {news.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 font-serif leading-[1.05] tracking-tight">
            Rejoignez la communauté
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-tight">
            Suivez-nous sur Instagram pour ne manquer aucune interview et faire
            partie de la conversation avec les fans de tennis du monde entier.
          </p>
          <a
            href="https://instagram.com/tennisuniversel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-black px-12 py-6 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl tracking-tight"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Suivre @tennisuniversel</span>
          </a>
        </div>
      </section>
    </div>
  );
}
