import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Projects from '../pages/Projects/Projects';
import ProjectDetail from '../pages/Projects/ProjectDetail';

import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:id" element={<ProjectDetail />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;