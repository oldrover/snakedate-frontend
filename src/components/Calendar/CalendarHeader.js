import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faCalendar } from '@fortawesome/free-solid-svg-icons';

export const CalendarHeader =(props) => {    

    const handleClick = (event) => {
        let add;
        event.target.value === 'back' ? add = 'false' : add = 'true';  
        
        props.handleMonthChange(add);    
    }

    
    return(
            <div className="CalendarHeader">  
                <div className="Tab">                    
                    <FontAwesomeIcon icon={faCalendar} />
                    <div>Kalender</div>
                </div>
                <div>
                    <button value="back" onClick={handleClick}>
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                </div>                  
                <div>
                    {props.calendar.getMonthName()}
                </div>
                <div>
                    <button value="forward" onClick={handleClick}>
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>                
                <button 
                    className='HeuteButton'
                    onClick={props.handleSwitchToday}
                >
                    Heute                    
                </button>               
                <div className="CalendarYear">                    
                    {props.calendar.getYear()}
                </div>
                
               
            </div>
        )
    
}