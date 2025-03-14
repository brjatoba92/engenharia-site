import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Nex Serviços e Engenharia</Link>
            </div>
            <nav className={`nav-items ${isOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>Sobre</Link>
                <Link to="/projects" onClick={() => setIsOpen(false)}>Projetos</Link>
                <Link to="/services" onClick={() => setIsOpen(false)}>Serviços</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contato</Link>
            </nav>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Header;