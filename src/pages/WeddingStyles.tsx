const harmonogram = [
  { time: "10:00", event: "Příjezd hostů", icon: "🚗" },
  { time: "11:00", event: "Obřad", icon: "💍" },
  { time: "12:00", event: "Společné focení", icon: "📸" },
  { time: "13:00", event: "Slavnostní oběd", icon: "🍽️" },
  { time: "15:00", event: "Krájení dortu", icon: "🎂" },
  { time: "16:00", event: "Zábava, hry, tanec", icon: "💃" },
  { time: "18:00", event: "Večerní raut", icon: "🍖" },
  { time: "20:00", event: "První tanec novomanželů", icon: "🎶" },
  { time: "22:00", event: "Volná zábava a půlnoční překvapení", icon: "✨" },
];

import Container from "../components/Container";
import ContentCard from "../components/ContentCard";

const WeddingStyles = () => {
  return (
    <div className="pt-8 pb-20">
      <Container maxWidth="3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-green-900">
            Svatební harmonogram
          </h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto leading-relaxed">
            Přehledný časový plán našeho svatebního dne, abyste věděli, na co se
            můžete těšit.
          </p>
        </div>
        <ContentCard>
          <ul className="space-y-4">
            {harmonogram.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center py-4 border-b border-green-100 last:border-b-0"
              >
                <div className="text-2xl mr-4">{item.icon}</div>
                <div className="w-24 text-green-800 font-bold text-lg">
                  {item.time}
                </div>
                <div className="flex-1 text-green-900 text-lg font-serif">
                  {item.event}
                </div>
              </li>
            ))}
          </ul>
        </ContentCard>
      </Container>
    </div>
  );
};

export default WeddingStyles;
