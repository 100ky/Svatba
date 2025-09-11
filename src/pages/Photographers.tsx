import Container from "../components/Container";

import Button from "../components/Button";

const Photographers = () => {
  return (
    <div className="pt-8 pb-20">
      <Container maxWidth="4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-green-900">
            Fotokoutek
          </h1>
          <p className="text-xl text-green-800 max-w-3xl mx-auto leading-relaxed">
            Podělte se o své momentky z našeho dne! Nahrajte fotky a pomozte nám
            vytvořit nezapomenutelné album.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <Button 
            as="a"
            href="https://1drv.ms/f/c/9a3e2861320591bb/EhF-Q40KnEVDvs6MwBo9CzwBK7a9fkgkb2OWIZUSSDbYpA?e=qOgnek"
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            size="lg"
          >
            📤 Nahrát fotku
          </Button>
        </div>
        <div className="text-center text-green-700 mt-12">
          <p>Zde se brzy objeví galerie s vašimi fotografiemi. Děkujeme!</p>
        </div>
      </Container>
    </div>
  );
};

export default Photographers;
