import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Venues from './pages/Venues';
import VenueDetail from './pages/VenueDetail';
import Photographers from './pages/Photographers';
import Catering from './pages/Catering';
import WeddingStyles from './pages/WeddingStyles';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-24 pb-12 flex-grow">          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:venueId" element={<VenueDetail />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/styles" element={<WeddingStyles />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
