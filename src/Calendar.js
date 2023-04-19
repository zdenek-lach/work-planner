import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Calendar() {


    const days = [];

    const daysInMonth = new Date(2023, 3, 0).getDate();
    const lastDayOfMonth = new Date(2023, 3, daysInMonth).getDate(); // add this line to get the last day of the month
    const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(<div className="col">
            <div className="row">
                <button className="btn btn-secondary btn-lg">{i}</button>
            </div>
        </div>);
    }

    const blanks = [];

    for (let i = 0; i < firstDay; i++) {
        blanks.push(<div className="col" key={`blank-${i}`}>
            <div className="row"></div>
        </div>);
    }

    const totalSlots = [...blanks, ...days];

    const lastDay = new Date(2022, 3, daysInMonth).getDay();
    const remainingSlots = 6 - lastDay;

    if (remainingSlots > 0) {
        for (let i = 0; i < remainingSlots; i++) {
            totalSlots.push(<div className="col" key={`blank-${i + firstDay}`}>
                <div className="row"></div>
            </div>);
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

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

    const currentMonth = month[new Date().getMonth()];
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();

    return (<div className="container">
        <h1>
            {currentMonth} {currentYear}
        </h1>
        <table className="table">
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
                return (<tr key={i}>
                    {row.map((day, j) => {
                        return (<td key={j}>
                            {day}
                        </td>);
                    })}
                </tr>);
            })}
            </tbody>
        </table>
    </div>);
}


export default Calendar;
