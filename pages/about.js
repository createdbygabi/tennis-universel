export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            À propos
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-serif">
            Tennis Universel
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-3xl p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nous sommes une communauté de passionné.es de tennis. Tout est parti d'une discussion Whatsapp pendant le covid entre ami.e.s et connaissances. Ce sport nous "rend fou" comme dirait Gilles Simon. Bienvenu.e.s à toutes et à tous sur Tennis Universel. Ce site web a pour but de rendre la balle jaune accessible à l'ensemble de l'humanité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Une équipe passionnée</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous sommes une équipe originale composée d'individus aux racines diverses. Ceci n'est pas étonnant, car au fond, la "Yellow Ball" est universelle, n'est-ce pas ?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Un média social</h3>
              <p className="text-gray-600 leading-relaxed">
                Tennis Universel partage une vision sociétale. Peu importe d'où l'on vient, l'essentiel est d'échanger sur ce sport magnifique qui est très souvent victime de clichés et de pensées limitantes. Sentez-vous à l'aise de partager vos histoires et anecdotes à propos de la "Yellow Ball".
              </p>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif">Dépasser les frontières</h2>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tennis Universel a pour but de dépasser les frontières du tennis. S'adresser à des personnes qui n'ont jamais côtoyé la balle jaune est une motivation. Construire des ponts avec d'autres sports et d'autres domaines de la société, tels que la culture, l'environnement ou l'économie est également une volonté. Cassons les codes tous ensemble.
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

