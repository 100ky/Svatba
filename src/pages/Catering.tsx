const sampleMenu = [
    {
        category: 'Předkrmy',
        items: ['Bruschetta s rajčaty a bazalkou', 'Carpaccio z hovězí svíčkové', 'Caprese salát']
    },
    {
        category: 'Hlavní chod',
        items: ['Konfitované kachní stehno s červeným zelím', 'Grilovaný losos s bylinkovou omáčkou', 'Risotto s hříbky a parmazánem']
    },
    {
        category: 'Dezert',
        items: ['Čokoládový fondant s malinami', 'Tiramisu', 'Panna cotta s lesním ovocem']
    },
    {
        category: 'Nápoje',
        items: ['Prosecco', 'Domácí limonáda', 'Káva, čaj']
    }
];

const Catering = () => {
    return (
        <div className="min-h-screen bg-cream-200 pt-8 pb-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-6xl">🍽️</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary-500 to-cream-200 bg-clip-text text-transparent">
                            Svatební menu
                        </span>
                    </h1>
                    <p className="text-xl text-primary-500 max-w-2xl mx-auto leading-relaxed">
                        Inspirujte se ukázkovým svatebním menu. Každý chod je připraven s láskou a důrazem na kvalitu.
                    </p>
                </div>
                <div className="bg-cream-200/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl shadow-lg p-8">
                    {sampleMenu.map((section, idx) => (
                        <div key={idx} className="mb-8 last:mb-0">
                            <h2 className="text-xl font-serif font-semibold text-primary-500 mb-4 flex items-center">
                                <span className="mr-2">{section.category === 'Předkrmy' ? '🥗' : section.category === 'Hlavní chod' ? '🥩' : section.category === 'Dezert' ? '🍰' : '🥂'}</span>
                                {section.category}
                            </h2>
                            <ul className="space-y-2 ml-4">
                                {section.items.map((item, i) => (
                                    <li key={i} className="text-primary-500 text-lg flex items-center">
                                        <span className="mr-2 text-primary-500">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catering;
