import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Nex Serviços e Engenharia</h3>
                    <p>Localizada no coração da cidade, a Nex Serviços e Engenharia traz para o mercado o que há de melhor para o seu negócio.</p>
                </div>
                <div className="footer-section">
                    <h3>Contato</h3>
                    <p><FaPhone /> (11) 1234-5678</p>
                    <p><FaEnvelope /> 2mFt0@example.com</p>
                    <p><FaMapMarkerAlt /> Rua Exemplo, 123, São Paulo, SP</p>
                </div>
                <div className="footer-section">
                    <h3>Redes Sociais</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/nexservicosengenharia" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/nexservicosengenharia" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/nexservicosengenharia" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Nex Serviços e Engenharia. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;