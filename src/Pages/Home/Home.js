import React from 'react';
import Footer from '../Shared/Footer';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurOtherCategory from './OurOtherCategory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <OurOtherCategory></OurOtherCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;