import React from 'react';
import './Activity.css';

const Activity = ({ activity }) => {
    return (
        <div className='card h-100' >
            <img src={activity.img} width="100% " alt="" />
            <h5 className='activityHeading'>{activity.name}</h5>
            <p className='activityText'>{activity.desc}</p>
        </div>
    );
};

export default Activity;