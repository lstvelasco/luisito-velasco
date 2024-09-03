const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer footer-center bg-base-200 text-base-content rounded p-10"
    >
      <aside>
        <p className="font-mono">
          Copyright © {new Date().getFullYear()} - All right reserved by Luisito
          Velasco
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
