import { FormEventsListItem } from "./FormEventsListitem";

export const FormEventsList = (props) => {

    return (
        <div className="FormEventsList">  
            <h4>Event list:</h4>
            {                
                props.dailyEvents.map(dailyEvent => {
                    return (
                        <FormEventsListItem 
                            dailyEvent={dailyEvent} 
                            handleDeleteEvent={props.handleDeleteEvent}                           
                        />
                    )                    
                })
            }            
        </div> 
    )
}