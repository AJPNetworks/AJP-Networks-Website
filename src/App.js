import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='nav-compensation'></div>

      <section className="banner-section">
        <Banner />
      </section>

      <section className="about-section">
        <About />
      </section>
      
      <section className="portfolio-section">
        <Portfolio />
      </section>

      <section className="contact-section">
        <ContactForm />
      </section>

      <Footer />

    </div>
  );
}

export default App;
