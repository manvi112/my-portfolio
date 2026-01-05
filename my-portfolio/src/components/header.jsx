import './header.css';
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
    <header className="navLink">
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <Link className="contactNo" to="/contact"><button>Contact</button></Link>
    </header>
    </>
  );
}
