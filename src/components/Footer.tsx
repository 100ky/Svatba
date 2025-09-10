const Footer = () => {
  return (
    <footer className="bg-beige-100 text-green-800 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Svatba Anetky a Toma. Vytvořeno s
            láskou.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
