import React from 'react';
import styles from './Heading.module.css'
const Heading = ({ subtitle, heading }) => {
    return (

        <div className={styles.headingContainer} >
            <span className={styles.headingSubtitle}>{subtitle}</span>
            <h2 className={styles.heading}>{heading}</h2>
        </div>

    );
};

export default Heading;