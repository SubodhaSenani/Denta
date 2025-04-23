import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Reviews from './components/Review';
import Contacts from './components/Contact';
import Appointment from './components/Appointment';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;