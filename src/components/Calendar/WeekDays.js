export const WeekDays = (props) => {

    const calendar = props.calendar;

    return ( 
        <div className='week_days'>
            {
            calendar.getWeekDays().map(weekDay => <div className='week_day' key={weekDay}>{weekDay}</div>)}
        </div>
    )
}
