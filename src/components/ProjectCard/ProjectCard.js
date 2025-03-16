import React from "react";
import { Link } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="project-link">
                    Ver Detalhes
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;