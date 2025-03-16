import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
    return(
        <div className="home-page">
           <section className="hero">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-content"
            >
                <h1>Soluções de Engenharia para o Futuro</h1>
                <p>Inovação, qlaidade e exlenecia em cada projeto</p>
                <button className="cta-button">Nossos serviços</button>
            </motion.div>
           </section>
           
           <section className="services-preview">
            <h2>Nossos Serviços</h2>
            <div className="services-grid">
                <div className="services-card">
                    <div className="services-icon">🏗️</div>
                    <h3>Projetos Estruturais</h3>
                    <p>Desenvolvemos soluções de software personalizadas para atender às suas necessidades específicas.</p>
                </div>
                <div className="services-card">
                    <div className="services-icon">🔧</div>
                    <h3>Consultoria Tenica</h3>
                    <p>Desenvolvemos soluções de software personalizadas para atender às suas necessidades spepificas.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">🌱</div>
                    <h3>Sustentabilidade</h3>
                    <p>Desenvolvemos soluções de software personalizadas para atender às suas necessidades spepificas.</p>
                </div>
            </div>
           </section>

           <section className="services-preview">
            <h2>Projetos Recentes</h2>
            <div className="projects-grid">
                Projetos de destaque
            </div>
           </section>

           <section className="testimonials">
            <h2>O que dizem nossos clientes</h2>
            <div className="testimonials-slider">
                Testemunhos
            </div>
           </section>

        </div>
    )
}