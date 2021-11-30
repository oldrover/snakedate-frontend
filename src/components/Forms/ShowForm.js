import { EventForm } from "./EventForm";

export const ShowForm = (props) => {

    const handleClose = () => {
        props.handleShowForm(false, {});
    }


    return (        
        <div id="show-form">            
            {props.formData.formType === "event" && 
                <EventForm 
                    handleClose={handleClose}
                    snake={props.snake}
                    date={props.formData.date}
                    dailyEvents={props.formData.dailyEvents}
                    
                />
            }
        </div>
    )
}