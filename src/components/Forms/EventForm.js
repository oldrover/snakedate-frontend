import { useState } from "react";

import { FormHeader } from "./FormHeader";
import { FormEventsList } from "./FormEventsList";


const dateOptions = { 
    weekday: "short", 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit"
};

export const EventForm = (props) => {

    const defaultData = {
        "snakeId": props.snake.snakeId,
        "date": props.date,
        "type": "feed",
        "info": ""
    }

    const [eventData, setEventData] = useState(defaultData);
    
    
    const deleteEventData = (eventId) => {
        const requestOptions = {
            method: "DELETE"            
        };        

        fetch(`/events/${eventData.snakeId}/${eventId}`, requestOptions)                       
            .catch(error => alert(error));
    }      
    
    const postEventData = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData)
        };  
                
        fetch(`/events`, requestOptions)                        
            .catch(error => alert(error));
    }

    const handleTypeChange = (e) => {
        setEventData({...eventData, type: e.target.value});
    }

    const handleInfoChange = (e) => {
        setEventData({...eventData, info: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        postEventData(); 
        props.handleClose();
    }

    const handleDeleteEvent = (eventId) => {
        deleteEventData(eventId);
        props.handleClose();
    }
    
    return (
        <div className="EventForm">            
            <FormHeader 
                handleClose={props.handleClose} 
                text="Add a new Event"
            />
            <FormEventsList 
                dailyEvents={props.dailyEvents} 
                handleDeleteEvent={handleDeleteEvent}
            />          
            <div className="FormBody">
                <form className="Form" onSubmit={handleSubmit}>
                    <label for="snake_name">Snake:</label>
                    <input id="snake_name" value={props.snake.name} disabled/>  
                    
                    <label for="event_date">Date:</label>
                    <input id="event_date" value={new Date(eventData.date).toLocaleString(undefined ,dateOptions)} disabled />  
                    
                    <label for="select_type">Event Type:</label>
                    <select id="select_type" value={eventData.type} onChange={handleTypeChange}>
                        <option value="feed">Feed</option>
                        <option value="poop">Poop</option>
                        <option value="weight">Weight</option>
                    </select>

                    <label for="info_field">Info:</label>
                    <textarea onChange={handleInfoChange} />                

                    <button type="submit" >
                        save
                    </button>  
                </form>
            </div>
            <div className="FormFooter"></div>
            
        </div>
    )
}