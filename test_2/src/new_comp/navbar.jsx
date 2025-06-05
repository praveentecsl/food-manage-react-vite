import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/foreign">Foreign</Link>
      <Link to="/traditional">Traditional</Link>
      <Link to="/nutritional">NUpraveen</Link>
    </nav>
  );
}

export default Navbar;
