import { EventForm } from "./EventForm";

export const ShowForm = (props) => {

    const handleClose = () => {
        props.handleShowForm(false, {});  
        props.setIsLoading(true);      
    }


    return (        
        <div id="show-form">            
            {props.formData.formType === "event" && 
                <EventForm 
                    handleClose={handleClose}                    
                    snake={props.snake}
                    user={props.user}
                    date={props.formData.date}
                    dailyEvents={props.formData.dailyEvents}
                    
                />
            }
        </div>
    )
}