import React from "react";
import { Link } from "react-router-dom";
import './ServiceItem.css';

const ServiceItem = ({ service }) => {
    const { id, title, imageUrl, description } = service;
    return (
        <div className="service-item">
            <div className="service-icon">
                { icon && <div className="icon">{icon}</div>}
                {imageUrl && <img src={imageUrl} alt={title} className="service-image" />}
            </div>
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
                <Link to={`/services/${id}`} className="service-link">
                    Saiba mais
                </Link>
            </div>
        </div>
    );
};
