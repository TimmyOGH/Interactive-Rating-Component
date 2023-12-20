import React from "react";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Heading from "./Heading";

function AfterSubmit(props) {
    return (
        <div className="aft_submit_component">
            <div className="ty_img_container">
                <Image
                    className="ty_img"
                    src="/images/illustration-thank-you.svg"
                    alt="illustration-thank-you"
                />
            </div>
            <div className="selected_text_container">
                <Paragraph
                    text={`You selected ${props.selectedRating} out of 5`}
                />
            </div>
            <div className="ty_desc_container">
                <Heading
                    text="Thank you!"
                />
                <Paragraph
                    text="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
                />
            </div>
        </div>
    );
}

export default AfterSubmit;
