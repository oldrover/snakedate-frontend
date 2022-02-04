import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faCalendar } from '@fortawesome/free-solid-svg-icons';

export const CalendarHeader =(props) => { 
    
    const calendar = props.calendar;
    const handleMonthChange = props.handleMonthChange;
    const handleSwitchToday = props.handleSwitchToday;

    const handleClick = (event) => {        
        handleMonthChange(event);    
    }
    
    return(
            <div className='calendar_header'>  
                <div className='tab'>                    
                    <FontAwesomeIcon icon={faCalendar} />
                    <div className='tab-text'>Kalender</div>
                </div>
                <div>
                    <button value='back' onClick={() => handleClick('false')}>
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                </div>                  
                <div>
                    {calendar.getMonthName()}
                </div>
                <div>
                    <button value='forward' onClick={() => handleClick('true')}>
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