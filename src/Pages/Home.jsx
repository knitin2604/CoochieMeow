import React, { Fragment } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import About from './../Components/Sections/About/About';
import Chefs from './../Components/Sections/Chefs/Chefs';
import Contact from './../Components/Sections/Contact/Contact';
import Delivery from './../Components/Sections/Delivery/Delivery';
import Menu from './../Components/Sections/Menu/Menu';
import Services from './../Components/Sections/Services/Services';
import Gallery from './../Components/Sections/Gallery/Gallery';
import WhyUs from '../Components/Sections/WhyUs/WhyUs';
import Testimonial from '../Components/Sections/Testimonial/Testimonial';
import BookTable from '../Components/Sections/Booking/BookTable';
import Hero from '../Components/Sections/Hero/Hero';

const Home = () => {
    return (
        <Fragment>
            {/* import header from header component */}
            <Header id="home"/>
            {/* import all sections from sections component */}
            <Hero  id="home"/>
            <About id="about" />
            <WhyUs />
            <Delivery id="delivery" />
            <Menu id="menu" />
            <Services id="services" />
            <Testimonial />
            <Gallery id="gallery" />
            
            <Chefs id="chefs" />
            <Contact id="contact" />
            {/* import footer from footer component */}
            <Footer />
            <BookTable/>
        </Fragment>
    );
};

export default Home;