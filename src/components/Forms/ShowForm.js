import { EventForm } from "./EventForm";
import { SnakeForm} from "./SnakeForm";

export const ShowForm = (props) => {

    const handleClose = () => {
        props.setIsLoading(true);
        props.handleShowForm(false, {});  
              
    }


    return (        
        <div id="show-form">            
            {
            props.formData.formType === "event" && 
                <EventForm 
                    handleClose={handleClose}                    
                    snake={props.snake}
                    user={props.user}
                    date={props.formData.date}
                    dailyEvents={props.formData.dailyEvents}                    
                />
            }

            {
            props.formData.formType === "snake" &&
                <SnakeForm 
                    handleClose={handleClose}
                    user={props.user}
                />
            }


        </div>
    )
}