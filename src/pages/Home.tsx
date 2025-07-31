import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-cream-200">
            {/* Hero Section */}
            <section className="pt-20 pb-32 px-4 text-center relative">
                <div className="max-w-5xl mx-auto relative">
                    {/* Floating elements */}
                    <div className="absolute -top-10 left-10 text-6xl opacity-20 animate-bounce">❤️</div>
                    <div className="absolute top-20 right-16 text-4xl opacity-30 animate-pulse">✨</div>
                    <div className="absolute bottom-10 left-1/4 text-5xl opacity-25 animate-bounce delay-500">🌸</div>

                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                            <span className="bg-gradient-to-r from-primary-500 via-primary-500 to-cream-200 bg-clip-text text-transparent">
                                Svatba Anetky a Toma
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-500 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Vítejte na stránce věnované svatbě Anetky a Toma.
                        </p>
                        <CountdownWedding />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-cream-200/60 backdrop-blur-sm relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cream-200/50 via-white/30 to-primary-500/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            <span className="bg-gradient-to-r from-primary-500 to-cream-200 bg-clip-text text-transparent">
                                Vše co potřebujete vědět o naší svatbě 
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="🏡"
                            title="Svatební místo"
                            description="Šípková stodola – romantické místo pro vaši svatbu v přírodě. Prohlédněte si více na oficiálním webu."
                            link="https://www.sipkovastodola.cz/"
                            accent="primary"
                            external={true}
                        />
                        <FeatureCard
                            icon="photographers"
                            title="Fotografové"
                            description="Najděte umělce, který zachytí vaše nejkrásnější okamžiky"
                            link="/photographers"
                            accent="primary"
                        />
                        <FeatureCard
                            icon="catering"
                            title="Catering"
                            description="Objevte gastronomické zážitky pro vaše hosty"
                            link="/catering"
                            accent="primary"
                        />                        <FeatureCard
                            icon="styles"
                            title="Styly svateb"
                            description="Inspirujte se různými styly a najděte ten váš"
                            link="/styles"
                            accent="primary"
                        />                        <FeatureCard
                            icon="calculator"
                            title="Kalkulačka"
                            description="Naplánujte si přesný rozpočet s naší chytrou kalkulačkou"
                            link="/calculator"
                            accent="primary"
                        />                        <FeatureCard
                            icon="reviews"
                            title="Recenze"
                            description="Čtěte autentické příběhy od novomanželů"
                            link="/venues"
                            accent="primary"
                        /></div>
                </div>
            </section>

            {/* Stats Section */}
            {/* Patička */}
            <footer className="mt-24 py-8 text-center text-primary-500 text-sm">
                &copy; {new Date().getFullYear()} Svatba Anetky a Toma. Všechna práva vyhrazena.
            </footer>
        </div>
    );
};

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    link: string;
    accent?: string;
    external?: boolean;
}

const FeatureCard = ({ icon, title, description, link, accent = 'pink', external = false }: FeatureCardProps) => {
    const accentColors = {
        primary: 'hover:border-primary-300 hover:shadow-primary-100 group-hover:text-primary-600 bg-gradient-to-br from-cream-200 to-primary-100',
    };

    return external ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
        >
            <div className={`bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${accentColors[accent as keyof typeof accentColors]}`}>                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="mr-2">Prozkoumat</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    ) : (
        <Link
            to={link}
            className="group block"
        >
            <div className={`bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${accentColors[accent as keyof typeof accentColors]}`}>                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
            <div className="mt-6 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="mr-2">Prozkoumat</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
        </Link>
    );
};

// Funkce pro výpočet zbývajícího času do obřadu
const targetDate = new Date('2026-08-01T11:00:00');
function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
}

// Komponenta pro odpočet času do obřadu
const CountdownWedding = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return (
            <div className="text-2xl text-primary-500 font-semibold mb-6">Obřad právě probíhá nebo již proběhl!</div>
        );
    }

    return (
        <div className="text-lg md:text-xl text-primary-500 font-semibold mb-6">
            Zbývá <span className="font-bold">{timeLeft.days} dní, {timeLeft.hours} hodin, {timeLeft.minutes} minut, {timeLeft.seconds} sekund</span> do obřadu!
        </div>
    );
};

export default Home;
