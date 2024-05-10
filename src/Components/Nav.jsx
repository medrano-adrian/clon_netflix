import { useState, useEffect } from "react";
import logoNetflix from '../../public/images/logo-netflix.png';
import logoAvatar1 from '../../public/images/Netflix-avatar.png';
import '../styles/Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    const [mostrar, setMostrar] = useState(false);

    const transicionNav = () => {
        if (window.scrollY > 100) {
            setMostrar(true);
        } else {
            setMostrar(false);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll", transicionNav);
        return () => window.removeEventListener("scroll", transicionNav);
    }, []);

    return (
    <nav className= {`nav ${mostrar && "nav_black"}`}>
        <div className="nav_contents">
            <Link to="/">
                <img className="nav_logo" src={logoNetflix} alt="Logo de Netflix" />
            </Link>
            <Link to="/perfiles">
                <img className="nav_avatar" src={logoAvatar1} alt="Netflix avatar" />
            </Link>
        </div>
    </nav>
    )
}

export default Nav;