import React from 'react';
import AboutUsCards from '../AboutUsCards/AboutUsCards/AboutUsCards';
import Activities from '../Activities/Activities/Activities';
import Announcement from '../Announcement/Announcement';
import HowToHelp from '../HowToHelp/HowToHelp';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <AboutUsCards />
            <Announcement />
            <HowToHelp />
            <Activities />
            <Video />
        </div>

    );
};

export default Home;