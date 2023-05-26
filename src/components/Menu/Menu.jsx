import "./style.css";

const Menu = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/public/spotifylogo.svg" alt="Spotify logo" />
        </div>
        <nav className="nav">
          <ul className="header__ul">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li> | </li>
            <li className="header__ul__li-text-grey">Sign up</li>
            <li className="header__ul__li-text-grey">Log in</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
