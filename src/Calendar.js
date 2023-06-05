import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DayButton from "./DayButton";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function Calendar() {
    const [calendarData, setCalendarData] = useState([]);

    const handleDayClick = (day, isHomeOffice, note, isShiftClick) => {
        const updatedCalendarData = [...calendarData];
        const dayData = {
            day,
            isHomeOffice: isShiftClick ? !isHomeOffice : isHomeOffice,
            note
        };
        const index = updatedCalendarData.findIndex((data) => data.day === day);
        if (index !== -1) {
            updatedCalendarData[index] = dayData;
        } else {
            updatedCalendarData.push(dayData);
        }
        setCalendarData(updatedCalendarData);
    };

    const days = [];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayData = calendarData.find((data) => data.day === i);
        days.push(
            <div className="col w-75" key={i}>
                <div className="row">
                    <DayButton
                        day={i}
                        color="secondary"
                        isHomeOffice={dayData ? dayData.isHomeOffice : false}
                        note={dayData ? dayData.note : ""}
                        onClick={(isHomeOffice, note, isShiftClick) =>
                            handleDayClick(i, isHomeOffice, note, isShiftClick)
                        }
                    />
                </div>
            </div>
        );
    }

    const blanks = [];

    for (let i = 0; i < firstDay; i++) {
        blanks.push(
            <div className="col" key={`blank-${i}`}>
                <div className="row"></div>
            </div>
        );
    }

    const totalSlots = [...blanks, ...days];

    const lastDay = new Date(currentYear, currentMonth, daysInMonth).getDay();
    const remainingSlots = 6 - lastDay;

    if (remainingSlots > 0) {
        for (let i = 0; i < remainingSlots; i++) {
            totalSlots.push(
                <div className="col" key={`blank-${i + firstDay}`}>
                    <div className="row"></div>
                </div>
            );
        }
    }

    let rows = [];
    let cells = [];

    totalSlots.forEach((day, i) => {
        if (i % 7 !== 0) {
            cells.push(day);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(day);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });

    const exportAppState = () => {
        const jsonData = JSON.stringify(calendarData);
        console.log(jsonData);
        // Send jsonData to backend server or save in local storage
    };

    return (
        <div className="container">
            <h1>
                {monthNames[currentMonth]} {currentYear}
            </h1>
            <button className="btn btn-primary mb-4" onClick={exportAppState}>
                Export App State
            </button>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row, i) => {
                    return (
                        <tr key={i}>
                            {row.map((day, j) => {
                                return <td key={j}>{day}</td>;
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;
