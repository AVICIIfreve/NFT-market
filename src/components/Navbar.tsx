import "../styles/Navbar.css";
import Logo from "../assets/Logo.jpg";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
        <p>OpenCat</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Drops</a>
          </li>
          <li>
            <a href="#">Stats</a>
          </li>
          <li>
            <a href="#">Create</a>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="login-user-cart">
        <button>Login</button>
        <button>Profile</button>
        <button>Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
