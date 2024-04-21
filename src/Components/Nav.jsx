import React, { useState, useEffect } from "react";
import logoNetflix from '../../public/images/logo-netflix.png';
import logoAvatar from '../../public/images/Netflix-avatar.png';
import '../styles/Nav.css';

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
            <img className="nav_logo" src={logoNetflix} alt="Logo de Netflix" />
            <img className="nav_avatar" src={logoAvatar} alt="Netflix avatar" />
        </div>
    </nav>
    )
}

export default Nav;