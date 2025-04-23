import React from 'react';
import '../css/Aboutus.css';
import aboutUsImage from '../assets/images/aboutus.webp';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="section-title">Welcome to <span className="text-primary">DENTA</span></h2>
            <div className="section-divider mb-4"></div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content">
              <p className="lead mb-4">
                Welcome to DENTA, your premier dental destination. Our mission is to provide comprehensive dental care in a warm and friendly environment.
              </p>
              <p className="mb-4">
                Maintaining your smile is important and scheduling dental visits isn't always easy, that's why we offer evening and weekend hours at our clinic. From periodic cleanings and checkups to cosmetic dentistry and dental implants, the professionals here at DENTA are committed to making sure you and your family have a happy and healthy smile.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>Committed to helping you achieve the smile you deserve</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>In practice for almost 30 years</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  <span>Serving the community for 15 years</span>
                </div>
              </div>
              <button className="btn btn-primary mt-4">Learn More</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image">
            <img src={aboutUsImage} alt="Slide 1" />
              <div className="experience-badge">
                <span className="number">30</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;