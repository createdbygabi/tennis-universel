export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            À propos
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            TennisUniversel
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Votre source d'interviews et d'actualités tennis exclusives
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-3xl p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              TennisUniversel est dédié à offrir aux fans de tennis un accès exclusif aux 
              figures les plus influentes du sport. Grâce à nos interviews en direct sur Instagram, 
              nous créons une plateforme où les légendes, les étoiles montantes et les experts de l'industrie partagent 
              leurs histoires, leurs idées et leur passion pour le tennis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous croyons que derrière chaque grand joueur se cache une histoire inspirante, et nous sommes 
              là pour vous raconter ces histoires directement, en temps réel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interviews en direct</h3>
              <p className="text-gray-600 leading-relaxed">
                Animez des conversations en direct sur Instagram avec des professionnels du tennis, 
                permettant aux fans d'interagir et de poser des questions en temps réel.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Actualités tennis</h3>
              <p className="text-gray-600 leading-relaxed">
                Restez informé des dernières actualités du tennis professionnel, des 
                résultats des tournois aux nouvelles des joueurs et aux mises à jour de l'industrie.
              </p>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Suivez-nous sur Instagram pour ne jamais manquer une interview et faire partie de la conversation
            </p>
            <a
              href="https://instagram.com/tennisuniversel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Suivre @tennisuniversel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

