function Calendar() {
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).getDate();

    return <>
    <table>
        <thead>Monday</thead>
        <thead>Tuesday</thead>
        <thead>Wednesday</thead>
        <thead>Thursday</thead>
        <thead>Friday</thead>
        <tbody>

        </tbody>
    </table>
    </>;

}

    export default Calendar;