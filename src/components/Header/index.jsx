import HeaderLogo from "../../assets/logo-kasa-header.svg";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="headContainer">
      <Link to="/">
        <img src={HeaderLogo} alt="Kasa" className="headLogo" />
      </Link>
      <nav className="navContainer">
        <Link to="/" className="header-link">
          Accueil
        </Link>
        <Link to="/about" className="header-link">
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
