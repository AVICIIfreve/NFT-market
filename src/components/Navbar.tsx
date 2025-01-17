import "../styles/test.css";
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
        <a>
          <i
            className="fa-regular fa-envelope"
            style={{ marginRight: "5px" }}
          ></i>
          Login
        </a>
        <a>
          <i className="fa-regular fa-user"></i>
        </a>
        <a>
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
