import React, { useState} from "react";
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('null');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 2000);
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Entre em contato</h1>
                <p>Estamos a dispossição para atender suas necessidades.</p>
            </div>
            
            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-item">
                        <h3>Endereço</h3>
                        <p>Rua Exemplo, 123, São Paulo, SP</p>
                    </div>
                    <div className="info-item">
                        <h3>Telefone</h3>
                        <p>(11) 1234-5678</p>
                    </div>
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>2mFt0@example.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Horarios de atendimento</h3>
                        <p>Segunda a Sexta: 8h às 18h</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input 
                                type="text"
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefone</label>
                            <input 
                                type="tel"
                                id="phone" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Assunto</label>
                            <input 
                                type="text"
                                id="subject" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea 
                                id="message" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
                            {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                        {formStatus === 'success' && (
                            <div className="form-sucess">
                                Sua mensagem foi enviada com sucesso! Obrigado por entrar em contato conosco.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}