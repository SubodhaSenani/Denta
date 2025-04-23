import React from 'react';
import '../css/Services.css';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import service4 from '../assets/images/service4.webp';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Cosmetic Dentistry',
    description: 'We offer many different services to improve the appearance of your teeth. From crowns, veneers, and teeth whitening, we have you covered.',
    image: service1,
    icon: 'tooth',
  },
  {
    id: 2,
    title: 'Crown and Bridge',
    description: 'Crowns and bridges are necessary to protect broken down teeth and are one way to replace missing teeth.',
    image: service2,
    icon: 'crown',
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Have crooked teeth? Come in for an examination to see what can be done. We now offer Invisalign.',
    image: service3,
    icon: 'teeth-open',
  },
  {
    id: 4,
    title: 'Dental Implants',
    description: 'Dental Implants are the best way to replace a missing tooth.',
    image: service4,
    icon: 'tooth',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive Dental Care Solutions for Your Entire Family
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <i className={`fas fa-${service.icon}`}></i>
                  </div>
                </div>
                <div className="service-content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                  <button className="btn btn-outline-primary btn-learn-more">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;