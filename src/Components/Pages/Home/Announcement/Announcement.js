import React, { useEffect, useState } from 'react';
import styles from './Announcement.module.css';

const Announcement = () => {
    const [announcements, setAnnouncement] = useState([]);

    useEffect(() => {
        fetch('HomeAnnouncement.json')
            .then(res => res.json())
            .then(data => setAnnouncement(data))
    }, [])
    return (
        <div className='container'>
            <div className="row g-5">
                <div className="col-md-6">
                    <div className={styles.headingContainer} >
                        <span className={styles.headingSubtitle}>Non-profit Organization In Bangladesh</span>
                        <h2 className={styles.heading}>WORKS FOR HUMANITY FOUNDATION</h2>
                    </div>
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
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className={styles.headingRight}>Announcement</h3>
                    {
                        announcements.map(announcement => (
                            <div key={announcement.serial} >
                                <div className="card" style={{ borderRadius: "0px", textAlign: "center", height: "736px", marginTop: "40px", overflow: "hidden" }} >

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
                </div>
            </div>
        </div>
    );
};

export default Announcement;