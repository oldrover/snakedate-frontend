import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faUtensils, faPoop } from '@fortawesome/free-solid-svg-icons';


export const CalendarDay = (props) => {
     
    const handleClick = () => {          
        props.handleShowForm(true);
        
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
                props.dailyEvents.map(e => {
                    let eventIcon = "";
                    switch (e.type) {
                        case "weight":
                            eventIcon = faBalanceScale;
                            break;
                        
                        case "feed":
                            eventIcon = faUtensils;
                            break; 
                            
                        case "poop":
                            eventIcon = faPoop;
                            break;

                        default:
                            break;
                    }

                    return(
                        <div className="Event">                                                    
                        <FontAwesomeIcon icon={eventIcon} />
                        { e.type === "weight" && ` ${e.info}` }
                        </div>
                        );
                })
            }
            </div>            
        </div>
    )
}