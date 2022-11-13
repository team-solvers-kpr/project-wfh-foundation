import React from 'react';

import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";

const CustomButton = ({ title, backgroundColor, width, height }) => {
    return (
        <>
            <button style={{ backgroundColor: backgroundColor, border: "none", width: width, height: height, borderRadius: "5px", color: "#ffff", fontFamily: "'Poppins", fontSize: "12px", textTransform: "uppercase" }} >{title} <BsArrowRight size={15} /></button>
        </>
    );
};

export default CustomButton;