import React, { useEffect, useState } from 'react';
import AboutUsCard from '../AboutUsCard/AboutUsCard';

const AboutUsCards = () => {
    const [aboutUsCards, setAboutUsCards] = useState([]);

    useEffect(() => {
        fetch('AboutUsCards.json')
            .then(res => res.json())
            .then(data => setAboutUsCards(data))
    }, [])

    return (
        <div className="container" style={{ marginBottom: "50px" }}>
            <div className='row mb-3 mt-5'>
                {
                    aboutUsCards.map((aboutUsCard) =>
                        <AboutUsCard key={aboutUsCard.serial} aboutUsCard={aboutUsCard} />
                    )
                }
            </div>
        </div>
    );
};

export default AboutUsCards;