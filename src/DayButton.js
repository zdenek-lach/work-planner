import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";

function DayButton({ text, onClick }) {
    const [isHomeOffice, setIsHomeOffice] = useState(false);

    const handleDayClick = () => {
        setIsHomeOffice(!isHomeOffice);
    };

    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    const isCurrentDay = text === currentDay;

    return (
        <button
            className={`btn ${isCurrentDay ? "btn-primary" : "btn-secondary"}`}
            onClick={() => {
                onClick();
                handleDayClick();
            }}
        >
      <span className={`day-number ${isHomeOffice ? "home-office" : ""}`}>
        {text}
      </span>
            {isHomeOffice && <RiHome2Line className="home-office-icon" />}
        </button>
    );
}

export default DayButton;
