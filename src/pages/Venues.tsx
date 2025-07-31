// ...existing code...

const Venues = () => {
    return (
        <div className="min-h-screen bg-cream-200 pt-8 pb-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-6xl">🏡</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary-500 to-cream-200 bg-clip-text text-transparent">
                            Svatební místo
                        </span>
                    </h1>
                </div>
                <div className="block bg-cream-200/80 backdrop-blur-sm border-2 border-primary-500/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-8 text-center">
                    <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Šípková stodola</h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
                        <img src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000119-bfe88bfe8b/700/IMG_0087.webp?ph=46d1460cee" alt="Šípková Stodola" className="rounded-xl shadow-md w-full max-w-xs object-cover" />
                        <img src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000070-3d68b3d68e/700/IMG_0088.webp?ph=46d1460cee" alt="Šípková Stodola statek" className="rounded-xl shadow-md w-full max-w-xs object-cover" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
                        <img src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000042-a4047a4049/700/images-pexels-com-photos-313707-pexels-photo-313707-auto-compress-cs-tinysrgb-dpr-2-h-650-w-940.webp?ph=46d1460cee" alt="Svatba v Šípkové Stodole" className="rounded-xl shadow-md w-full max-w-xs object-cover" />
                        <img src="https://46d1460cee.clvaw-cdnwnd.com/f9a3e063806fbc891543caed5251cb9f/200000046-d84f4d84f6/700/images-pexels-com-photos-1043902-pexels-photo-1043902-auto-compress-cs-tinysrgb-dpr-2-h-650-w-940.webp?ph=46d1460cee" alt="Svatby v Šípkové Stodole" className="rounded-xl shadow-md w-full max-w-xs object-cover" />
                    </div>
                    <a
                        href="https://www.sipkovastodola.cz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink-400 to-primary-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Navštívit web
                    </a>
                    <div className="mt-4 text-lg text-primary-500 font-semibold">
                        Džbánov 13, 566 01, Vysoké Mýto
                    </div>
                    {/* Mapa s odkazem na mapy.cz */}
                    <div className="mt-8 flex flex-col items-center gap-4">
                        <a
                            href="https://mapy.cz/cs/zakladni?source=addr&id=11079411&ds=1&x=16.1579275&y=49.9181663&z=17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-16 py-2 bg-gradient-to-r from-primary-500 to-cream-200 text-white rounded-full font-bold text-base shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center justify-center gap-2"
                        >
                            <span className="text-xl">🗺️</span>
                            <span>Zobrazit na Mapy.cz <svg className="w-5 h-5 inline-block align-middle ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ...existing code...
export default Venues;
