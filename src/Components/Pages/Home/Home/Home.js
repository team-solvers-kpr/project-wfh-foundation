import React from 'react';
import AboutUsCards from '../AboutUsCards/AboutUsCards/AboutUsCards';
import Announcement from '../Announcement/Announcement';
import HowToHelp from '../HowToHelp/HowToHelp';

const Home = () => {
    return (
        <div>
            <AboutUsCards />
            <Announcement />
            <HowToHelp />
        </div>
    );
};

export default Home;