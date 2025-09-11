const sampleMenu = [
  {
    category: "Předkrm",
    items: [
      "Bruschetta s rajčaty a bazalkou",
      "Hovězí carpaccio s parmazánem a rukolou",
      "Salát Caprese s balzamikovou redukcí",
    ],
  },
  {
    category: "Hlavní chod",
    items: [
      "Konfitované kachní stehno, červené zelí, bramborový knedlík",
      "Grilovaný losos na bylinkovém másle, šťouchané brambory",
      "Hříbkové risotto s hoblinami parmazánu",
    ],
  },
  {
    category: "Dezert",
    items: [
      "Čokoládový fondant s malinovou omáčkou",
      "Domácí Tiramisu",
      "Panna Cotta s lesním ovocem",
    ],
  },
];

import Container from "../components/Container";
import ContentCard from "../components/ContentCard";

const Catering = () => {
  return (
    <div className="pt-8 pb-20">
      <Container maxWidth="3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-green-900">
            Svatební menu
          </h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto leading-relaxed">
            Připravili jsme pro vás výběr toho nejlepšího. Doufáme, že si
            pochutnáte!
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm border border-green-200/50 rounded-2xl shadow-lg p-8 space-y-8">
          {sampleMenu.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-serif font-semibold text-green-800 mb-4 border-b-2 border-green-200 pb-2">
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="text-green-800 text-lg flex">
                    <span className="text-green-600 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center pt-6">
            <h3 className="text-xl font-serif font-semibold text-green-800 mb-3">
              Dobrou chuť!
            </h3>
            <span className="text-3xl">🥂</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catering;
