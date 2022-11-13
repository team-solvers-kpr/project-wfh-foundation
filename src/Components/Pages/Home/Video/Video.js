import React, { useState } from 'react';
import './Video.css'
import { AiFillPlayCircle } from "@react-icons/all-files/ai/AiFillPlayCircle";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"

            aria-labelledby="contained-modal-title-vcenter"
            centered
        >


            <iframe width="100%" height="506" src="https://www.youtube.com/embed/KP15clZw0jA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Modal>
    );
}

const Video = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <center className="videoContainer">
            <h2 className='videoContainerTitle'>Discover what’s possible when a <br /> community creates together.</h2>
            <span className='borderSpan'></span><br />
            <AiFillPlayCircle size={100} className="videoBtn" onClick={() => setModalShow(true)} />

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </center>
    );
};

export default Video;