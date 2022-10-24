import React, { useEffect, useState } from 'react';
import styles from './Announcement.module.css';
import users from '../../../../Assets/Icons/1.png'
import beneficiary from '../../../../Assets/Icons/2.png'
import projects from '../../../../Assets/Icons/3.png'
import districts from '../../../../Assets/Icons/4.png'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Heading from '../../../Shared/Heading/Heading';

const Announcement = () => {
    const [announcements, setAnnouncement] = useState([]);

    useEffect(() => {
        fetch('HomeAnnouncement.json')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <Heading subtitle="Non-profit Organization In Bangladesh" heading="WORKS FOR HUMANITY FOUNDATION" />
                    <div>
                        <p className={styles.desc}>
                            WFH FOUNDATION is a Non-profit Social Organization in Bangladesh that is working to remove illiteracy, make every people aware of their rights, and increase awareness about child marriage with different charitable activities in Bangladesh. It also aims to ensure every human being’s participation in blood donation and make people aware of the disease.
                        </p>
                        <p className={styles.desc}>
                            WFH FOUNDATION has four individual depts. including four individual teams which are governed by Dept. Head.
                        </p>
                        <h4 className={styles.heading2}>Dept. of Education</h4>
                        <p className={styles.desc}>
                            75% of students only read the academic book. Most of them never read storybooks or they hardly know about literature which is a crying need for enlightening the human mind or outlook. Education dept. is collecting books for a library named “BOIBARI” and it distributes books among the student from class three to class nine. Students who had no goal or planning for their future, are starting to think maturely and they make an aim for their career.
                        </p>
                        <h4 className={styles.heading2}>Dept. of Awareness</h4>
                        <p className={styles.desc}>
                            Lack of awareness is one of the root reasons for any problems.Dept.of Awareness is doing regular workshops to increase public awareness.At present, it’s working for stopping child marriage.
                        </p>
                        <h4 className={styles.heading2}>Dept. of Health & Blood</h4>
                        <p className={styles.desc}>
                            Can a human being imagine his body without blood? Or is it possible to make it by machine? Ans. Is NO, But blood can be needed for anyone, anytime. Basically, Dept. of Health & Blood is working for managing blood donors for needy patients
                        </p>
                        <div className={styles.headingContainer2} >
                            <span className={styles.headingSubtitle}>Lorem Ipsum is simply dummy text</span>
                            <h2 className={styles.heading}>Reach And Presence</h2>
                        </div>
                        <p className={styles.desc2}>
                            <span style={{ fontWeight: "bold" }}>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <h3 className={styles.headingRight}>Announcement</h3>
                    {
                        announcements.map(announcement => (
                            <div key={announcement.serial} >
                                <div className="card" style={{ borderRadius: "0px", textAlign: "center", marginTop: "15px", overflow: "hidden" }} >

                                    <img className={styles.announcementImg} src={announcement.img} style={{ borderRadius: "0px" }} alt="" />
                                    <div className="card-body">
                                        <span className={styles.announcementDate}>{announcement.date}</span>
                                        <h5 className={styles.announcementTitle}>{announcement.title}</h5>
                                        <p className={styles.announcementDesc}>
                                            {announcement.desc.slice(0, 405)}
                                            <span style={{ paddingLeft: "5px" }}>.....</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className={styles.iconsContainer}>
                        <div className='row'>
                            <div className='col-6'>
                                <div className={styles.iconWithNumber}>
                                    <div>
                                        <img src={users} alt="" /></div>
                                    <div className={styles.numbers}>
                                        <CountUp end={228} redraw={true} duration={4.75}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className={styles.number} ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <div className={styles.milestone}>Volunteer</div>
                                    </div>
                                </div>

                                <div className={styles.iconWithNumber}>
                                    <div>
                                        <img src={beneficiary} alt="" /></div>
                                    <div className={styles.numbers}>
                                        <CountUp end={120000} redraw={true} duration={4.75}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className={styles.number3} ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <div className={styles.milestone}>Beneficiary</div>
                                    </div>
                                </div>


                            </div>
                            <div className='col-6'>
                                <div className={styles.iconWithNumber}>
                                    <div>
                                        <img src={projects} alt="" /></div>
                                    <div className={styles.numbers}>
                                        <CountUp end={120} redraw={true} duration={4.75}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className={styles.number2} ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <div className={styles.milestone}>Projects</div>
                                    </div>
                                </div>
                                <div className={styles.iconWithNumber}>
                                    <div>
                                        <img src={districts} alt="" /></div>
                                    <div className={styles.numbers}>
                                        <CountUp end={13} redraw={true} duration={4.75} >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span className={styles.number4} ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <div className={styles.milestone}>District</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;