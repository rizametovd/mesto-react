import logo from '../images/logo.svg';


function Header() {

    return (
        <header className="header">
            <a className="header__logo-link" href="/#" target="_self"><img className="header__logo" src={logo} alt="Логотип"/></a>
        </header>
    );
}

export default Header;
