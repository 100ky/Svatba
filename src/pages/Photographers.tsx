// ...existing code...
import type { PhotographerType } from '../types';
import { photographers } from '../data/photographers';

const Photographers = () => {
    // ...filtrovací stavy a proměnné odstraněny...

    const filteredPhotographers = photographers
        .filter(photographer => {
            const name = photographer.name.toLowerCase();
            return (
                !name.includes('hlinsko')
                && !name.includes('východočeský objektivv')
                && !name.includes('studio pardubice')
            );
        });

    return (
        <div className="min-h-screen pt-8 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-6xl">📸</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-pink-500 to-primary-600 bg-clip-text text-transparent">
                            Fotokoutek
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Najděte ideální fotokoutek nebo fotografa pro vaši svatbu a vytvořte si <span className="font-serif italic text-pink-600">nezapomenutelné vzpomínky</span> na celý život.
                    </p>
                </div>
                <div className="flex justify-center mb-8">
                    <a
                        href="https://1drv.ms/f/c/9a3e2861320591bb/EhF-Q40KnEVDvs6MwBo9CzwBK7a9fkgkb2OWIZUSSDbYpA?e=qOgnek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-400 to-primary-500 text-white shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        📤 Nahrát fotku do fotokoutku
                    </a>
                </div>
                {/* ...filtrovací sekce odstraněna... */}

                {/* Photographers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredPhotographers.map((photographer) => (
                        <PhotographerCard
                            key={photographer.id}
                            photographer={photographer}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface PhotographerCardProps {
    photographer: PhotographerType;
}

const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
    // Výchozí balíček bude 'standard' pokud existuje, jinak první dostupný
    const currentPackage = photographer.pricePackages['standard'] || Object.values(photographer.pricePackages)[0];

    const getSpecializationIcon = (specialization: string) => {
        const icons: { [key: string]: string } = {
            'traditional': '👰',
            'modern': '✨',
            'artistic': '🎨',
            'documentary': '📖'
        };
        return icons[specialization] || '📸';
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-pink-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">{getSpecializationIcon(photographer.specialization)}</span>
                            <h3 className="text-xl font-serif font-semibold text-gray-800">{photographer.name}</h3>
                        </div>
                        <p className="text-gray-600 flex items-center">
                            <span className="mr-2">📍</span>
                            {photographer.location}
                        </p>
                        <p className="text-sm text-gray-500 capitalize font-medium bg-gray-100 px-3 py-1 rounded-full inline-block mt-2">
                            {photographer.specialization} fotografie
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center mb-1 bg-yellow-50 px-2 py-1 rounded-full">
                            <span className="text-yellow-400 text-lg">⭐</span>
                            <span className="ml-1 text-sm font-medium text-gray-700">{photographer.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500 flex items-center">
                            <span className="mr-1">🏆</span>
                            {photographer.experience} let zkušeností
                        </p>
                    </div>
                </div>

                {/* Package Details */}
                <div className="bg-gradient-to-r from-pink-50 to-primary-50 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-serif font-semibold text-gray-800 text-lg">{currentPackage.name}</h4>
                        <span className="text-2xl font-bold text-pink-600">
                            {currentPackage.price.toLocaleString()} Kč
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2">⏰</span>
                            <span className="text-gray-500">Hodinky:</span>
                            <span className="ml-2 font-medium">{currentPackage.hours}h</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-2">📷</span>
                            <span className="text-gray-500">Fotografií:</span>
                            <span className="ml-2 font-medium">{currentPackage.photos}</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-3 flex items-center">
                            <span className="mr-2">✨</span>
                            Zahrnuje:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {currentPackage.includes.map((item, index) => (
                                <span key={index} className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Packages Comparison */}
                <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                        <span className="mr-2">📦</span>
                        Všechny balíčky:
                    </h4>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                        {Object.entries(photographer.pricePackages).map(([key, pkg]) => (
                            <div key={key} className="p-3 rounded-xl text-center bg-gray-50 hover:bg-gray-100 transition-all">
                                <div className="font-medium text-gray-800">{pkg.name}</div>
                                <div className="font-bold text-primary-600">
                                    {pkg.price.toLocaleString()} Kč
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-pink-400 to-primary-500 text-white py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <span className="mr-2">🖼️</span>
                        Portfolio
                    </button>
                    <button className="bg-white border-2 border-pink-300 text-pink-600 py-3 px-4 rounded-xl font-medium hover:bg-pink-50 transition-all duration-300">
                        <span className="mr-1">📞</span>
                        Kontakt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Photographers;
