function Navbar() {
  return (
    <header className="navbar">
      <nav className="container flex">
        <a className="brand" href="_a">
          Logo
        </a>
        <ul className="flex">
          <li>
            <a href="_b">Hero</a>
          </li>
          <li>
            <a href="_b">Articles</a>
          </li>
          <li>
            <a href="_b">Footer</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
