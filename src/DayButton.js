import React from "react";

function Button(props) {
    const { color, text, onClick } = props;
    return (
        <div className="col">
            <div className="row" style={{ height: "2.5rem" }}>
                <button className={`btn btn-${color}`} onClick={onClick}>
                    {text}
                </button>
            </div>
        </div>
    );
}

export default Button;
