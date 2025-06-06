import { Link } from "react-router-dom";
import logo from "../images/Logo.svg"; // make sure this path is correct

function Header({ children }) {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Little Lemon logo" style={{ cursor: 'pointer' }} />
      </Link>
      {children}
    </header>
  );
}

export default Header;
