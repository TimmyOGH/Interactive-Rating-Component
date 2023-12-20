import React from "react";
import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Rating from "./Rating";

function BeforeSubmit(props) {
    const ratings = [1, 2, 3, 4, 5];

    function handleRatingClick(id) {
        props.setSelectedRating(id);
    }

    function handleSubmit() {
        props.onSubmit(true);
    }

    return (
        <div className="bef_submit_component">
            <div className="star_img_container">
                <Image
                    className="star_img"
                    src="./images/icon-star.svg"
                    alt="icon-star"
                />
            </div>
            <div className="desc_container">
                <Heading
                    text="How did we do?"
                />
                <Paragraph
                    text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
                />
            </div>
            <div className="rating_container">
                {ratings.map((rating) =>
                    <Rating
                        key={rating}
                        id={rating}
                        rating={rating}
                        isSelected={props.selectedRating === rating}
                        onRatingClick={handleRatingClick}
                    />
                )}
            </div>
            <button onClick={handleSubmit} className="submit_btn">SUBMIT</button>
        </div>
    );
}

export default BeforeSubmit;
