import React from "react";

function DayButton(props) {
    return (
        <button
            className={`btn btn-${props.color}`}
            onClick={props.onClick}
            style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            {props.text}
        </button>
    );
}

export default DayButton;
