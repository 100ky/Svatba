import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import LeafCountdown from "../components/LeafCountdown";
import {
  HomeIcon,
  CameraIcon,
  Bars3Icon,
  ClockIcon,
  GiftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: HomeIcon,
    title: "Svatební místo",
    description:
      "Naše svatba se bude konat v romantické Šípkové stodole. Více informací o místě najdete zde.",
    link: "/venues",
  },
  {
    icon: CameraIcon,
    title: "Fotokoutek",
    description:
      "Zachyťte s námi ty nejlepší momentky! Podívejte se na ukázky a nahrajte své vlastní fotky.",
    link: "/photographers",
  },
  {
    icon: Bars3Icon,
    title: "Svatební menu",
    description:
      "Těšte se na skvělé jídlo a pití. Zde si můžete prohlédnout, co jsme pro vás připravili.",
    link: "/catering",
  },
  {
    icon: ClockIcon,
    title: "Harmonogram dne",
    description:
      "Aby vám nic neuniklo, připravili jsme pro vás podrobný časový plán celého dne.",
    link: "/styles",
  },
  {
    icon: GiftIcon,
    title: "Svatební dary",
    description:
      "Největším dárkem pro nás bude vaše přítomnost. Pokud nás chcete potěšit, budeme rádi za příspěvek.",
    link: "/gifts",
  },
  {
    icon: QuestionMarkCircleIcon,
    title: "Časté dotazy",
    description:
      "Máte otázky ohledně dopravy, ubytování nebo dress codu? Odpovědi najdete zde.",
    link: "/faq",
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const FeatureCard = ({ icon: Icon, title, description, link }: FeatureCardProps) => {
  return (
    <Link to={link} className="group block h-full">
      <div className="bg-beige-50/50 backdrop-blur-lg border border-green-200/30 rounded-2xl p-8 shadow-lg hover:shadow-green-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2">
        <div className="text-green-800 w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-green-950 mb-4">
          {title}
        </h3>
        <p className="text-green-900/80 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-6 text-sm font-semibold text-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Zjistit více &rarr;
        </div>
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-green-50 text-gray-800">
      <AnimateOnScroll>
        <section className="pt-40 pb-24 px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative">
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-green-950 leading-tight">
              Svatba Anetky a Toma
            </h1>
            <p className="text-xl text-green-900/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Vítejte na stránce věnované našemu velkému dni. Najdete zde
              všechny důležité informace.
            </p>
            <LeafCountdown />
          </div>
        </section>
      </AnimateOnScroll>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <AnimateOnScroll key={feature.link} delay={index * 100}>
                <FeatureCard {...feature} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
                <h2 className="text-4xl font-serif text-green-950 mb-4">Těšíme se na vás!</h2>
                <p className="text-lg text-green-900/80">
                    Vaše přítomnost je pro nás ten největší dar. Doufáme, že si tento den užijete spolu s námi.
                </p>
            </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;