import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Hlavní layout aplikace.
 * Zobrazuje navigační lištu (Navbar), hlavní obsah (přes Outlet) a patičku (Footer).
 * Zajišťuje konzistentní strukturu pro všechny stránky a odděluje ji od logiky v App.tsx.
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 pb-12 flex-grow">
        {/* Outlet je speciální komponenta z react-router-dom, 
            která na tomto místě renderuje obsah aktuálně zvolené routy (stránky). */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
