function Navbar() {
  return (
    <header class="navbar">
      <div class="container flex">
        <div class="flex">
          <a class="brand" href="_a">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul class="flex nav-menu nav-menu-primary">
              <li>
                <a href="_a">Home</a>
              </li>
              <li>
                <a href="_a">About</a>
              </li>
              <li>
                <a href="_a">Blog</a>
              </li>
              <li>
                <a href="_a">Our Work</a>
              </li>
              <li>
                <a href="_a">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul class="flex nav-menu nav-menu-secondary">
            <li class="social-media-item">
              <a href="_a">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="_a">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="_a">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-primary" href="_a">
                {" "}
                Sign in / Join{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
