import React from 'react';
import AboutUsCards from '../AboutUsCards/AboutUsCards/AboutUsCards';
import Activities from '../Activities/Activities/Activities';
import Announcement from '../Announcement/Announcement';
import Blogs from '../Blogs/Blogs/Blogs';
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
            <Blogs />
        </div>

    );
};

export default Home;