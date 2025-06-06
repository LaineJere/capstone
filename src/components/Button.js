import { Link } from "react-router-dom";

function Button({ to, children }) {
  return (
    <Link to={to} className="button">
      {children}
    </Link>
  );
}

export default Button;