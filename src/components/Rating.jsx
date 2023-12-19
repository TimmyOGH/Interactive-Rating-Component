import React, { useState } from "react";
import Paragraph from "./Paragraph";

function Rating(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function getRatingStyles() {
        return {
            backgroundColor: props.isSelected ? "hsl(25, 97%, 53%)" : isMouseOver ? "hsl(216, 12%, 54%)" : "hsl(213, 19%, 18%)",
            color: props.isSelected || isMouseOver ? "hsl(0, 0%, 100%)" : "hsl(216, 12%, 54%)",
        };
    }

    function handleClick() {
        props.onRatingClick(props.id);
    }

    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <div style={getRatingStyles()} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} className="rating_circle">
            <Paragraph
                text={props.rating}
            />
        </div>
    );
}

export default Rating;