import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faCalendar } from '@fortawesome/free-solid-svg-icons';

export const CalendarHeader =(props) => { 
    
    const calendar = props.calendar;
    const handleMonthChange = props.handleMonthChange;
    const handleSwitchToday = props.handleSwitchToday;

    const handleClick = (event) => {
        let add;
        event.target.value === 'back' ? add = 'false' : add = 'true';  
        
        handleMonthChange(add);    
    }

    
    return(
            <div className='calendar_header'>  
                <div className='tab'>                    
                    <FontAwesomeIcon icon={faCalendar} />
                    <div>Kalender</div>
                </div>
                <div>
                    <button value='back' onClick={handleClick}>
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                </div>                  
                <div>
                    {calendar.getMonthName()}
                </div>
                <div>
                    <button value='forward' onClick={handleClick}>
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>                
                <button                     
                    onClick={handleSwitchToday}
                >
                    Heute                    
                </button>               
                <div className='calendar_year'>                    
                    {calendar.getYear()}
                </div>
                
               
            </div>
        )
    
}