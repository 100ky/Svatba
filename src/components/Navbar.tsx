
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation();
    const navItems = [
        { path: '/', label: 'Domů' },
        { path: '/venues', label: 'Místo konání' },
        { path: '/photographers', label: 'Fotokoutek' },
        { path: '/styles', label: 'Svatební harmonogram' },
        { path: '/catering', label: 'Catering' },
    ];
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => setMenuOpen((open) => !open);
    const handleMenuClose = () => setMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-cream-200 py-4 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">💍</div>
                        <div className="flex flex-col">
                            <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary-500 to-cream-200 bg-clip-text text-transparent">
                                Svatba 2026
                            </span>
                            <span className="text-xs text-primary-500 font-light -mt-1">Váš den snů</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-1 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === item.path
                                    ? 'bg-gradient-to-r from-primary-500 to-cream-200 text-white shadow-lg'
                                    : 'text-primary-500 hover:text-cream-200 hover:bg-primary-500/20'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="https://1drv.ms/f/c/9a3e2861320591bb/EhF-Q40KnEVDvs6MwBo9CzwBK7a9fkgkb2OWIZUSSDbYpA?e=qOgnek"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-500 to-cream-200 text-white shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            📤 Nahrát fotku
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            className="text-primary-500 hover:text-cream-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-2"
                            onClick={handleMenuToggle}
                            aria-label="Otevřít menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobilní menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={handleMenuClose}>
                    <div className="absolute top-16 left-0 right-0 bg-cream-200 rounded-b-2xl shadow-lg py-6 px-6 flex flex-col space-y-4 animate-fade-in" onClick={e => e.stopPropagation()}>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 rounded-full text-lg font-medium transition-all duration-300 ${location.pathname === item.path
                                    ? 'bg-gradient-to-r from-primary-500 to-cream-200 text-white shadow-lg'
                                    : 'text-primary-500 hover:text-cream-200 hover:bg-primary-500/20'
                                    }`}
                                onClick={handleMenuClose}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="https://1drv.ms/f/c/9a3e2861320591bb/EhF-Q40KnEVDvs6MwBo9CzwBK7a9fkgkb2OWIZUSSDbYpA?e=qOgnek"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-primary-500 to-cream-200 text-white shadow-lg hover:scale-105 transition-all duration-300"
                            onClick={handleMenuClose}
                        >
                            📤 Nahrát fotku
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
