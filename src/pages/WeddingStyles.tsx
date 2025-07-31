
const harmonogram = [
    { time: '08:00', event: 'Přípravy nevěsty a ženicha' },
    { time: '10:00', event: 'Příjezd hostů' },
    { time: '11:00', event: 'Obřad' },
    { time: '12:00', event: 'Společné focení' },
    { time: '13:00', event: 'Slavnostní oběd' },
    { time: '15:00', event: 'Krájení dortu' },
    { time: '16:00', event: 'Zábava, hry, tanec' },
    { time: '18:00', event: 'Večerní raut' },
    { time: '20:00', event: 'První tanec novomanželů' },
    { time: '22:00', event: 'Volná zábava' },
];

const WeddingStyles = () => {
    return (
        <div className="min-h-screen bg-cream-200 pt-8 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-6xl">🕒</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary-500 to-cream-200 bg-clip-text text-transparent">
                            Svatební harmonogram
                        </span>
                    </h1>
                    <p className="text-xl text-primary-500 max-w-2xl mx-auto leading-relaxed">
                        Podívejte se na časový plán našeho svatebního dne. Vše je připraveno pro krásné zážitky a pohodovou atmosféru.
                    </p>
                </div>
                <div className="bg-cream-200/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl shadow-lg p-8">
                    <ul className="divide-y divide-primary-100">
                        {harmonogram.map((item, idx) => (
                            <li key={idx} className="flex items-center py-6">
                                <div className="w-24 text-primary-500 font-bold text-xl text-center">
                                    {item.time}
                                </div>
                                <div className="flex-1 text-primary-500 text-lg font-serif">
                                    {item.event}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WeddingStyles;
