import React, { useState } from "react";
import BeforeSubmit from "./BeforeSubmit";
import AfterSubmit from "./AfterSubmit";

function App() {
    const [selectedRating, setSelectedRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div id="main_container">
            {submitted ?
                <AfterSubmit
                    selectedRating={selectedRating}
                />
                :
                <BeforeSubmit
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                    onSubmit={setSubmitted}
                />
            }
            <p style={{ color: "hsl(216, 12%, 54%)", textAlign: "center", position: "absolute", bottom: "5%" }}>Challenge by <a style={{ color: "hsl(25, 97%, 53%)" }} href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                Coded by <a style={{ color: "hsl(25, 97%, 53%)" }} href="https://www.frontendmentor.io/profile/timodn">@timodn</a>.
            </p>
        </div>
    )
}

export default App;