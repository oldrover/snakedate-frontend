import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faUtensils, faPoop, faTshirt } from '@fortawesome/free-solid-svg-icons';


export const CalendarDay = (props) => {   

    const {date, day ,className, dailyEvents, handleShowForm } = props;
         
    const handleClick = () => { 
        const formData = { 
            date: date, 
            formType: 'event', 
            dailyEvents: dailyEvents
        };
        handleShowForm(true, formData);        
    }

    
    return (
        <div 
            className={className} 
            key={props.day}
            onClick={handleClick}
        >
            <div>
                {day}                
            </div>
            <div className='events'>                
            {

                props.dailyEvents.map((event, index) => {                    
                    let eventIcon = '';
                    switch (event.type) {
                        case 'weight':
                            eventIcon = faBalanceScale;
                            break;
                        
                        case 'feed':
                            eventIcon = faUtensils;
                            break; 
                            
                        case 'poop':
                            eventIcon = faPoop;
                            break;
                        
                        case 'shedding':
                            eventIcon = faTshirt;
                            break;

                        default:                            
                            break;
                    }

                    return(
                        <div className='event' key={event + index}>                                                    
                        <FontAwesomeIcon icon={eventIcon} />
                        { event.type === 'weight' && ` ${event.info}` }
                        </div>
                        );
                })
            }
            </div>            
        </div>
    )
}