import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Connect from './components/Connect';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id='home'>
      <Navbar />
      <section className="banner-section">
        <Banner />
      </section>
      <section className="about-section" id='about'>
        <About />
      </section>
      <section className="clients-section" id='clients'>
        <Clients />
      </section>
      <section className="portfolio-section" id='portfolio'>
        <Portfolio />
      </section>
      <section className="connect-section" id='connect'>
        <Connect />
      </section>
      <section className="contact-section" id='contact'>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
