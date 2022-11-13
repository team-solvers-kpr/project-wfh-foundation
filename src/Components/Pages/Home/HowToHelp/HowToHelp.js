import React from 'react';
import './HowToHelp.css';

const HowToHelp = () => {
    return (
        <div className='howToHelp '>
            <div className="container">
                <div className="howToHelpBoxContainer">
                    <div class="howToHelpBox">

                        <div className="line"></div>
                        <img className='iconHelp' src=" https://wfhbd.org/wp-content/uploads/2018/08/search.png" alt="" />
                        <div className="line2"></div>

                        <h3 className='howToHelpBoxTitle'>
                            Be A Volunteer
                        </h3>
                        <p className='howToHelpBoxText'>
                            The best way to find yourself is to lose yourself in service of others.
                        </p>
                    </div>
                    <div class="howToHelpBox">

                        <div className="line"></div>
                        <img className='iconHelp' src="https://wfhbd.org/wp-content/uploads/2018/08/donation.png" alt="" />
                        <div className="line2"></div>

                        <h3 className='howToHelpBoxTitle'>
                            Make A donation
                        </h3>
                        <p className='howToHelpBoxText'>
                            We make a living by what we get, but we make a life by what we give.
                        </p>
                    </div>
                    <div class="howToHelpBox">

                        <div className="line"></div>
                        <img className='iconHelp' src="https://wfhbd.org/wp-content/uploads/2018/08/group.png" alt="" />
                        <div className="line2"></div>

                        <h3 className='howToHelpBoxTitle'>
                            Sharing
                        </h3>
                        <p className='howToHelpBoxText'>
                            Share our story with your friends and family, together we can make a better world
                        </p>
                    </div>
                    <div class="howToHelpBox">

                        <div className="line"></div>
                        <img className='iconHelp' src="https://wfhbd.org/wp-content/uploads/2018/08/world.png" alt="" />
                        <div className="line2"></div>

                        <h3 className='howToHelpBoxTitle'>
                            Be A Patner
                        </h3>
                        <p className='howToHelpBoxText'>
                            When we alone we can do so little; But together we can do so much.
                        </p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default HowToHelp;