import React from "react";

function HogDetails({ hog }) {
    const { greased, weight, "highest medal achieved": medal } = hog
    return (
        <div className="description">
            <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
            <p>
                highest medal achived: <strong>{medal}</strong>
            </p>
            <p>
                Weight as a ratio of hog to LG - 24.7 Cu. Gt. french Door Refrigerator
                with Thru-the-Door Ice and Water: <strong>{weight}</strong>
            </p>
        </div>
    );
}

export default HogDetails
