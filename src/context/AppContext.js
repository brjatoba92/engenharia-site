// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados de uma API
    const fetchData = async () => {
      try {
        // Substitua por chamadas reais à API
        const projectsData = [
          {
            id: 1,
            title: "Edifício Corporativo Alpha",
            category: "Projeto Estrutural",
            description: "Projeto estrutural para edifício comercial de 20 andares.",
            imageUrl: "/images/projects/edificio-alpha.jpg"
          },
          // Mais projetos aqui
        ];
        
        const servicesData = [
          {
            id: 1,
            title: "Projetos Estruturais",
            description: "Análise e desenvolvimento de projetos estruturais para edificações e obras de infraestrutura.",
            icon: "🏗️"
          },
          // Mais serviços aqui
        ];
        
        setProjects(projectsData);
        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ projects, services, loading }}>
      {children}
    </AppContext.Provider>
  );
};