import React, { useEffect, useState } from 'react';
import Heading from '../../../../Shared/Heading/Heading';
import './Activities.css';
import Activity from '../Activity/Activity';
import Carousel from "react-multi-carousel";
import CustomDots from '../../../../Shared/CustomDots/CutomDots';
import CustomButton from '../../../../Shared/CustomButton/CustomButton';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('Activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='container'>
            <div className='activitiesHeadingContainer'>
                <Heading subtitle="Joining Hands To Help The World’s" heading="Some outstanding activities" />
                <div className='activitiesHeadingText'>
                    We invite you on a journey through selected case studies of our work <br /> in support of the SDG agenda.
                </div>
            </div>

            <Carousel
                responsive={responsive}
                itemClass="image-item"
                infinite={true}
                autoPlay
                rewind
                autoPlaySpeed={2000}

            >
                {
                    activities.map(activity => <Activity key={activity.serial} activity={activity} />)
                }
            </Carousel>
            <h5 className='text-center'>Please find below our development projects.</h5>

            <center className="mt-4 mb-4">
                <CustomButton title="View All" backgroundColor="#0097fa" height="49px" width="140px" />
            </center>
        </div>
    );
};

export default Activities;