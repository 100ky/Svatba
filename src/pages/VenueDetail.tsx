import { useParams, Link } from 'react-router-dom';
import { venues } from '../data/venues';
import Container from '../components/Container';

const VenueDetail = () => {
    const { venueId } = useParams<{ venueId: string }>();
    const venue = venues.find(v => v.id === venueId);

    if (!venue) {
        return (
            <div className="min-h-screen pt-8 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Místo nenalezeno</h1>
                    <p className="text-gray-600 mb-6">Požadované svatební místo neexistuje.</p>
                    <Link
                        to="/venues"
                        className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Zpět na místa
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-8 pb-20">
            <Container maxWidth="6xl">
                {/* Back button */}
                <div className="mb-6">
                    <Link
                        to="/venues"
                        className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Zpět na místa
                    </Link>
                </div>

                {/* Header */}
                <div className="bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">{venue.name}</h1>
                            <p className="text-xl text-gray-600 flex items-center">
                                <span className="mr-2">📍</span>
                                {venue.location}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="bg-gradient-to-r from-beige-50 to-green-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-600 mb-1">Základní cena</p>
                                <p className="text-3xl font-bold text-green-700">{venue.basePrice.toLocaleString()} Kč</p>
                                <p className="text-sm text-gray-500">+ {venue.pricePerPerson.toLocaleString()} Kč/osoba</p>
                            </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xl ${i < Math.floor(venue.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                    ⭐
                                </span>
                            ))}
                            <span className="ml-2 text-gray-600 font-medium">{venue.rating}</span>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <p className="text-sm text-gray-600">Kapacita</p>
                            <p className="font-bold text-gray-800">{venue.capacity.min} - {venue.capacity.max} hostů</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <p className="text-sm text-gray-600">Typ</p>
                            <p className="font-bold text-gray-800 capitalize">{venue.type}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <p className="text-sm text-gray-600">Recenze</p>
                            <p className="font-bold text-gray-800">{venue.reviews.length}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <p className="text-sm text-gray-600">Dostupnost</p>
                            <p className="font-bold text-gray-800">{venue.availability.length} termínů</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className="bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 flex items-center">
                            <span className="mr-3">✨</span>
                            Vlastnosti
                        </h2>
                        <div className="space-y-3">
                            {venue.features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="text-green-500 mr-3">✓</span>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 flex items-center">
                            <span className="mr-3">📞</span>
                            Kontakt
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-gray-500 w-16">📞</span>
                                <a href={`tel:${venue.contact.phone}`} className="text-green-700 hover:text-green-800 font-medium">
                                    {venue.contact.phone}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-500 w-16">📧</span>
                                <a href={`mailto:${venue.contact.email}`} className="text-green-700 hover:text-green-800 font-medium">
                                    {venue.contact.email}
                                </a>
                            </div>
                            {venue.contact.website && (
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-16">🌐</span>
                                    <a
                                        href={`https://${venue.contact.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-700 hover:text-green-800 font-medium"
                                    >
                                        {venue.contact.website}
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <Link
                                to="/calculator"
                                className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-center block"
                            >
                                Přidat do kalkulačky
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                {venue.reviews.length > 0 && (
                    <div className="mt-8 bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 flex items-center">
                            <span className="mr-3">💬</span>
                            Recenze ({venue.reviews.length})
                        </h2>
                        <div className="space-y-6">
                            {venue.reviews.map((review) => (
                                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{review.author}</h4>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                        ⭐
                                                    </span>
                                                ))}
                                                {review.verified && (
                                                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                                        Ověřeno
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Availability */}
                <div className="mt-8 bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 flex items-center">
                        <span className="mr-3">📅</span>
                        Dostupné termíny 2026
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {venue.availability.map((date, index) => (
                            <div key={index} className="bg-gradient-to-r from-beige-50 to-green-50 p-4 rounded-xl text-center">
                                <p className="font-semibold text-gray-800">
                                    {new Date(date).toLocaleDateString('cs-CZ', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};
