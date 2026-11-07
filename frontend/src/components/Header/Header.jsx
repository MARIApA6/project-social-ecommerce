import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <Link to="/">ThreadShop</Link>
            </div>

            <nav className="header_nav">
                <Link to="/">פוסטים</Link>
                <Link to="/about">אודות</Link>
                <Link to="/.">להתחבר</Link>
            </nav>
        </header>
    );
};

export default Header;