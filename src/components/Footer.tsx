import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled contact-list">
              <li><i className="fas fa-envelope"></i> denta@gmail.com</li>
              <li><i className="fas fa-phone"></i> 012-345-6700</li>
              <li><i className="fas fa-map-marker-alt"></i> Sri Lanka</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/patient-forms">Patient Forms</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-links">
              <li><a href="https://www.facebook.com/dentalclinic"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/dentalclinic"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/company/dentalclinic"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.instagram.com/dentalclinic"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/dentalclinic"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Clinic Hours</h5>
            <ul className="list-unstyled hours-list">
              <li>Mon & Tue: 10am - 5pm</li>
              <li>Wed & Thu: 10am - 4pm</li>
              <li>Fri: 10am - 3pm</li>
              <li>Sat: 10am - 2pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;