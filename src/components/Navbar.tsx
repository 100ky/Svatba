import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Domů" },
    { path: "/venues", label: "Místo konání" },
    { path: "/photographers", label: "Fotokoutek" },
    { path: "/styles", label: "Harmonogram" },
    { path: "/catering", label: "Catering" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-beige-50/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
              💍
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-green-900">
                Anetka & Tom
              </span>
              <span className="text-xs text-green-700 font-light -mt-1">
                1. 8. 2026
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "bg-green-800 text-white shadow-md"
                    : "text-green-800 hover:bg-green-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://1drv.ms/f/c/9a3e2861320591bb/EhF-Q40KnEVDvs6MwBo9CzwBK7a9fkgkb2OWIZUSSDbYpA?e=qOgnek"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-full text-sm font-semibold bg-green-700 text-white shadow-lg hover:bg-green-800 hover:scale-105 transition-all duration-300"
            >
              📤 Nahrát fotku
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="text-green-800 hover:bg-green-100 focus:outline-none rounded-full p-2"
              onClick={handleMenuToggle}
              aria-label="Otevřít menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={handleMenuClose}
        >
          <div
            className="absolute top-0 left-0 right-0 bg-beige-50 rounded-b-2xl shadow-lg p-6 flex flex-col space-y-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif text-lg font-bold text-green-900">
                Menu
              </span>
              <button
                onClick={handleMenuClose}
                className="p-2 -mr-2"
                aria-label="Zavřít menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 text-center ${
                  location.pathname === item.path
                    ? "bg-green-800 text-white shadow-md"
                    : "text-green-800 hover:bg-green-100"
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
              className="block px-4 py-3 rounded-lg text-base font-semibold bg-green-700 text-white shadow-lg hover:bg-green-800 transition-all duration-300 text-center"
              onClick={handleMenuClose}
            >
              📤 Nahrát fotku
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
