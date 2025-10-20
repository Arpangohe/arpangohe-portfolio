import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactDashboard from './components/ImpactDashboard';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App bg-[#0F0F0F] min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImpactDashboard />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
