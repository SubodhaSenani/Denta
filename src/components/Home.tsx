import React from 'react';
import '../css/Home.css';
import home1 from '../assets/images/home1.jpg';
import home2 from '../assets/images/home2.jpeg';
import home3 from '../assets/images/home3.jpg';

const Home: React.FC = () => {
  return (
    <div className="full-page-bg" style={{ height: '100vh', width: '100%', position: 'relative' }}>
    <div id="home" className="bg-slideshow">
      <img src={home1} alt="Slide 1" />
      <img src={home2} alt="Slide 2" />
      <img src={home3} alt="Slide 3" />

      <div className="content">
        <h1>Welcome to DENTA</h1>
        <p className="main-tagline">Your Smile is Our Priority</p>
        <p className="sub-tagline">We are dedicated to providing you with exceptional dental care 
          that will make you smile with confidence.</p>
      </div>
    </div>
        </div>
  );
};

export default Home;