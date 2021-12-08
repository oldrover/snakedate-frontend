import { useState } from 'react';

import { FormHeader } from './FormHeader';
import { FormEventsList } from './FormEventsList';


const dateOptions = { 
    weekday: 'short', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit'
};

export const EventForm = (props) => {

    const snake = props.snake;
    const user = props.user;
    const date = props.date;
    const handleClose = props.handleClose;
    const dailyEvents = props.dailyEvents;

    const defaultData = {
        'snakeId': snake.snakeId,
        'date': date,
        'type': 'feed',
        'info': ''
    }

    const [eventData, setEventData] = useState(defaultData);
    
    
    const deleteEventData = (eventId) => {
        const requestOptions = {
            method: 'DELETE', 
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': user.jwt               
            }            
        };        

        fetch(`/api/events/${eventData.snakeId}/${eventId}`, requestOptions)                       
            .catch(error => alert(error));
    }      
    
    const postEventData = () => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': user.jwt               
            },            
            body: JSON.stringify(eventData)
        };  
                
        fetch(`/api/events`, requestOptions)                        
            .catch(error => alert(error));
    }

    
    const handleChange = (e) => {
        setEventData({...eventData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        postEventData(); 
        handleClose();        
    }

    const handleDeleteEvent = (eventId) => {
        deleteEventData(eventId);
        handleClose();        
    }
    
    return (
        <div className='all_forms event_form'>            
            <FormHeader 
                handleClose={handleClose} 
                text='Add a new Event'
            />
            <FormEventsList 
                dailyEvents={dailyEvents} 
                handleDeleteEvent={handleDeleteEvent}
            />          
            <div className='form_body'>
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='snake_name'>Snake:</label>
                    <input id='snake_name' value={snake.name} disabled/>  
                    
                    <label htmlFor='event_date'>Date:</label>
                    <input id='event_date' value={new Date(eventData.date).toLocaleString(undefined ,dateOptions)} disabled />  
                    
                    <label htmlFor='select_type'>Event Type:</label>
                    <select id='select_type' name='type' value={eventData.type} onChange={handleChange}>
                        <option value='feed'>Feed</option>
                        <option value='poop'>Poop</option>
                        <option value='weight'>Weight</option>
                        <option value='shedding'>Shedding</option>
                    </select>

                    <label htmlFor='info_field'>Info:</label>
                    <textarea name='info' onChange={handleChange} />                
                    <div className='button_container'>
                        <button  type='submit' >
                            save
                        </button>  
                    </div>
                </form>
            </div>
            <div className='form_footer'></div>
            
        </div>
    )
}