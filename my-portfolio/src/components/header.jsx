import './header.css';

export function NavBar() {
  return (
    <>
    <header className="navLink">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
       <span className="nav-name">Manvi Patel</span>
    </header>
    </>
  );
}
