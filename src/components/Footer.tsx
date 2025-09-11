import Container from "./ui/Container";

const Footer = () => {
  return (
    <footer className="bg-beige-100 text-green-800 py-6 mt-16">
      <Container>
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Svatba Anetky a Toma. Vytvořeno s
            láskou.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
