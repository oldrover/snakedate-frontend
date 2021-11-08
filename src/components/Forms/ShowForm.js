import { EventForm } from "./EventForm";

export const ShowForm = (props) => {

    const handleClose = () => {
        props.handleShowForm(false);
    }


    return (        
        <div id="show-form">            
            {props.form === "event" && 
                <EventForm 
                    handleClose={handleClose}
                    snakeId={props.snakeId}
                />
            }
        </div>
    )
}