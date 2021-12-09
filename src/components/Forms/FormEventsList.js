import { FormEventsListItem } from './FormEventsListitem';

export const FormEventsList = (props) => {

    const handleDeleteEvent = props.handleDeleteEvent;
    const dailyEvents = props.dailyEvents;

    return (
        <div className='form_events_list'>  
            <h4>Event list:</h4>
            {                
                dailyEvents.map(dailyEvent => {
                    return (
                        <FormEventsListItem 
                            dailyEvent={dailyEvent} 
                            handleDeleteEvent={handleDeleteEvent}                           
                        />
                    )                    
                })
            }            
        </div> 
    )
}