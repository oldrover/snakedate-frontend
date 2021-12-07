import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faUtensils, faPoop, faTshirt } from '@fortawesome/free-solid-svg-icons';


export const CalendarDay = (props) => {
     
    const handleClick = () => { 
        const formData = { 
            date: props.date, 
            formType: "event", 
            dailyEvents: props.dailyEvents
        };
        props.handleShowForm(true, formData);        
    }

    
    return (
        <div 
            className={props.className} 
            key={props.day}
            onClick={handleClick}
        >
            <div>
                {props.day}                
            </div>
            <div className="Events">                
            {

                props.dailyEvents.map((event, index) => {                    
                    let eventIcon = "";
                    switch (event.type) {
                        case "weight":
                            eventIcon = faBalanceScale;
                            break;
                        
                        case "feed":
                            eventIcon = faUtensils;
                            break; 
                            
                        case "poop":
                            eventIcon = faPoop;
                            break;
                        
                        case "shedding":
                            eventIcon = faTshirt;
                            break;

                        default:                            
                            break;
                    }

                    return(
                        <div className="Event" key={event + index}>                                                    
                        <FontAwesomeIcon icon={eventIcon} />
                        { event.type === "weight" && ` ${event.info}` }
                        </div>
                        );
                })
            }
            </div>            
        </div>
    )
}