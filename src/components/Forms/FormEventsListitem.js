import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


export const FormEventsListItem = (props) => {
    
    const dailyEvent = props.dailyEvent;
    const handleDeleteEvent = props.handleDeleteEvent;

    const [ eventId ] = useState(dailyEvent.eventId);

    const handleDeleteClick = () => {
       handleDeleteEvent(eventId);
    }

    return (
        <div 
            className='form_events_list_item' 
        >
            {dailyEvent.type}
            <FontAwesomeIcon 
                className='delete_icon'                
                icon={faTimesCircle} 
                onClick={handleDeleteClick}
            />
        </div>
    )
}