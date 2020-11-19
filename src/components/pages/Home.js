import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Projects from '../Projects'
import Footer from '../Footer'
import HeroSection from '../HeroSection';
import Experience from '../Experience'
import About from '../About';
import ContactSection from '../ContactSection'
import Clients from '../Clients'

function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
            <Clients />
            <Projects />
            <Experience />
            <ContactSection />
            <Footer />
        </>
    )
}
export default Home;