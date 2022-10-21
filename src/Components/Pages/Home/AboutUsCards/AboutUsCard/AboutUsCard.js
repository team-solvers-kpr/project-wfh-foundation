import React from 'react';
import Card from 'react-bootstrap/Card';
import CustomButton from '../../../../Shared/CustomButton/CustomButton';

const AboutUsCard = ({ aboutUsCard }) => {
    const { title, desc, img, color, btnText } = aboutUsCard
    return (
        <center className='col-md-6 col-lg-3 mb-5' >

            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body style={{ backgroundColor: color, height: "220px" }}>
                    <Card.Title style={{ fontFamily: "Poppins", color: "#ffff", fontSize: "18px" }}>{title}</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans", color: "#ffff", fontSize: "15px", height: "90px" }}>
                        {desc}
                    </Card.Text>
                    <CustomButton title={btnText} backgroundColor="#266fab" width="150px" height="33px" />
                </Card.Body>
            </Card>
        </center>

    );
};

export default AboutUsCard;