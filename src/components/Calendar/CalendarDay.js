
export const CalendarDay = (props) => {
    return (
        <div className={props.className} key={props.day}>
            <div>
            {props.day}
            </div>
            <div className="Events">
            {
                props.dailyEvents.map(e => {
                    return(
                        <div className="Event">
                            {e.type}
                        </div>
                        );
                })
            }
            </div>
        </div>
    )
}