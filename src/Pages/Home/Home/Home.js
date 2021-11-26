import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
};

export default Home;
