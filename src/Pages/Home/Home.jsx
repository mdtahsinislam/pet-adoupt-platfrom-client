import React from 'react';
import Banner from '../HomeDetails/Banner';
import PetCategorys from '../HomeDetails/PetCategorys';
import CTASection from '../HomeDetails/CTASection';
import AboutUs from '../HomeDetails/AboutUs';
import TestimonialSection from '../HomeDetails/TestimonialSection';
import ClientLogosMarquee from '../HomeDetails/ClientLogosMarquee';
import Award from '../HomeDetails/Award';

const Home = () => {
    return (

        <div>
<Banner></Banner>
        <PetCategorys></PetCategorys>
        <CTASection></CTASection>
        <AboutUs></AboutUs>
        <TestimonialSection></TestimonialSection>
        <ClientLogosMarquee></ClientLogosMarquee>
        <Award></Award>
        </div>
        
    );
};

export default Home;