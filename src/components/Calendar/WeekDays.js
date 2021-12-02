export const WeekDays = (props) => {

    return ( 
        <div className="WeekDays">
            {
            props.calendar.getWeekDays().map(weekDay => <div className="WeekDay" key={weekDay}>{weekDay}</div>)}
        </div>
    )
}
