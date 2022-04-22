import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../../app/features/events/eventSlice'; 

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { Calendar as Cal } from '../../models/Calendar';
import { WeekDays } from './WeekDays';
import { Loading} from '../Loading/Loading';
import { Inactive } from '../Inactive';


export const Calendar = (props) => { 
    
    const dispatch = useDispatch();

    const handleShowForm = props.handleShowForm;

    const user = useSelector(state => state.user);
    const snake = useSelector(state => state.snake.chosenSnake); 
    const snakeEvents = useSelector(state => state.event.events)
    const snakeStatus = useSelector(state => state.snake.status);
    const eventStatus = useSelector(state => state.event.status);     

    const [calendar, setCalendar] = useState(new Cal(new Date()));
    const [today] = useState(new Date()); 
          
    
    useEffect(() => {        
        if(snakeStatus ==='succeeded' && eventStatus === 'idle'){
            dispatch(fetchEvents({snake: snake, jwt: user.jwt}));            
        }  

    },[snake, user, snakeStatus, eventStatus, dispatch])
    

    const handleSwitchToday = () => {
        setCalendar(new Cal(new Date()));
    }
    
    const handleMonthChange = (add) => {
        let newMonth = calendar.getMonth();
        add === 'true' ? newMonth ++ 
            : newMonth --
                 
        const newCal = new Cal(new Date(calendar.getDate().setMonth(newMonth)));        
        setCalendar(newCal);               
    } 

    const filterEvents = (events, day) => {        
        return events.filter(e => new Date(e.date).getDate() === day
                    && new Date(e.date).getMonth() === calendar.getMonth()
                    && new Date(e.date).getFullYear() === calendar.getYear()                                              
            );  
    }

    const formatDate = (day) => {
        let month = calendar.getMonth()+1;

        day < 10 && (day = `0${day}`);  
        month < 10 && (month = `0${month}`);  

        return `${calendar.getYear()}/${month}/${day}`;
    }

    return (
        <div className='calendar'>  
            { snakeStatus !== 'succeeded' && <Loading />
            } 

            <CalendarHeader 
                handleMonthChange={handleMonthChange}
                handleSwitchToday={handleSwitchToday}
                calendar={calendar}
                
            /> 
            <WeekDays
                calendar={calendar}
            />              
            <div className='calendar_body'>  
                {
                    calendar.getCalendar().map((day, index) =>  { 
                        let clsName = ''
                        day === today.getDate() 
                        && calendar.getMonth() === today.getMonth()
                        && calendar.getYear() === today.getFullYear()
                            ? clsName = 'day today'
                            : clsName = 'day'  

                       
                        const dailyEvents = filterEvents(snakeEvents, day);                                            
                        const date = formatDate(day);
                        
                        return (                         
                            <CalendarDay 
                                className={clsName} 
                                day={day} 
                                date={date}                                
                                dailyEvents={dailyEvents}
                                handleShowForm={handleShowForm}  
                                key={date + index}                              
                            />                        
                        )
                    })
                }
            </div>              
            {
                snake.id === '' && (
                 <Inactive />
                )
            }
        </div>
    )    

}