const Venues = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-green-900">
            Místo konání
          </h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto leading-relaxed">
            Náš svatební den oslavíme v malebném prostředí Šípkové stodoly.
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg hover:shadow-green-200/40 transition-shadow duration-300 overflow-hidden p-8">
          <h3 className="text-3xl font-serif font-semibold text-green-900 mb-6 text-center">
            Šípková stodola
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img
              src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000119-bfe88bfe8b/700/IMG_0087.webp?ph=46d1460cee"
              alt="Šípková Stodola"
              className="rounded-xl shadow-md w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000070-3d68b3d68e/700/IMG_0088.webp?ph=46d1460cee"
              alt="Šípková Stodola statek"
              className="rounded-xl shadow-md w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000042-a4047a4049/700/images-pexels-com-photos-313707-pexels-photo-313707-auto-compress-cs-tinysrgb-dpr-2-h-650-w-940.webp?ph=46d1460cee"
              alt="Svatba v Šípkové Stodole"
              className="rounded-xl shadow-md w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000046-d84f4d84f6/700/images-pexels-com-photos-1043902-pexels-photo-1043902-auto-compress-cs-tinysrgb-dpr-2-h-650-w-940.webp?ph=46d1460cee"
              alt="Svatby v Šípkové Stodole"
              className="rounded-xl shadow-md w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="text-center text-lg text-green-800 font-semibold mb-8">
            Džbánov 13, 566 01 Vysoké Mýto
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="https://www.sipkovastodola.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-8 py-3 bg-green-700 text-white rounded-full font-medium shadow-lg hover:bg-green-800 hover:scale-105 transition-all duration-300"
            >
              Webové stránky
            </a>
            <a
              href="https://mapy.cz/s/pafeduzobu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-8 py-3 bg-transparent border-2 border-green-700 text-green-800 rounded-full font-medium hover:bg-green-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              🗺️ Zobrazit na mapě
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
