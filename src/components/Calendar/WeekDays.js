export const WeekDays = (props) => {

    return ( 
        <div className="WeekDays">
            {
            props.calendar.getWeekDays().map(weekDay => <div className="WeekDay">{weekDay}</div>)}
        </div>
    )
}
