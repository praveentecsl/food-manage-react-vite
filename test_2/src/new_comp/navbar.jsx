import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/foreign/tourists">Foreign</Link>
      <Link to="/traditional">Traditional</Link>
      <Link to="/nutritional">NUpraveen</Link>
      <Link to="/click">Transport</Link>
    </nav>
  );
}

export default Navbar;
