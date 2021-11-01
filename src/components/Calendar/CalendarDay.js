
export const CalendarDay = (props) => {
    return (
        <div className={props.className} key={props.day}>
            <div>
            {props.day}
            </div>
            <div className="Event">
            {
                props.dailyEvents.map(e => {
                    return(
                        <div >
                            {e.type}
                        </div>
                        );
                })
            }
            </div>
        </div>
    )
}