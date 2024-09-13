import logo from '../images/logo.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  );
}

export default NavBar;
