import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEvent, deleteEvent, resetEvents } from '../../app/features/events/eventSlice';

import { FormHeader } from './FormHeader';
import { FormEventsList } from './FormEventsList';


const dateOptions = { 
    weekday: 'short', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit'
};

export const EventForm = (props) => {

    const dispatch = useDispatch();

    const { snake, user, date, handleClose, dailyEvents } = props;

    const defaultData = {
        'snakeId': snake.snakeId,
        'date': date,
        'type': 'feed',
        'info': ''
    }

    const [eventData, setEventData] = useState(defaultData);
    
    
    const handleChange = (e) => {
        setEventData({...eventData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveEvent({ eventData: eventData, jwt: user.jwt}));
        dispatch(resetEvents());
        handleClose();        
    }

    const handleDeleteEvent = (eventId) => {        
        dispatch(deleteEvent({ eventId: eventId, snakeId: eventData.snakeId, jwt: user.jwt}));
        dispatch(resetEvents());
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