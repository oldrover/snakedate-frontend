import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

export const CalendarHeader =(props) => {    

    const { calendar, handleMonthChange, handleSwitchToday } = props;

    const handleClick = (event) => {        
        handleMonthChange(event);    
    }
    
    return(
        <div className='calendar_header'>              
             <div>              
                <button                     
                    onClick={handleSwitchToday}
                >
                    Heute                    
                </button>   
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
                     
            <div className='calendar_year'>                    
                {calendar.getYear()}
            </div>
            
            
        </div>
    )
    
}