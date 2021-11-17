import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


export const FormEventsListItem = (props) => {

    const [ eventId ] = useState(props.dailyEvent.eventId);

    const handleDeleteClick = () => {
       props.handleDeleteEvent(eventId);
    }

    return (
        <div 
            className="FormEventsListItem" 
        >
            {props.dailyEvent.type}
            <FontAwesomeIcon 
                className="DeleteIcon"                
                icon={faTimesCircle} 
                onClick={handleDeleteClick}
            />
            
            
        </div>
    )
}