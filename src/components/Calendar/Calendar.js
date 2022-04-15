import React, { useState, useEffect } from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { Calendar as Cal } from '../../models/Calendar';
import { WeekDays } from './WeekDays';
import { Loading} from '../Loading/Loading';
import { Inactive } from '../Inactive';


export const Calendar = (props) => {   

    const {user, snake, handleShowForm, setIsLoggedIn} = props;
   

    const [calendar, setCalendar] = useState(new Cal(new Date()));
    const [today] = useState(new Date());  

    const [snakeEvents, setSnakeEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);  
    
    useEffect(() => {
        const fetchEvents = async() => {
            const requestOptions = {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': user.jwt              
                    }      
            }; 
            
            await fetch(`/api/events/${snake.snakeId}`, requestOptions)
            .then(response => response.json())
            .then(data => {                                  
                handleSnakeEvents(data);                                 
            }) 
            .catch(error =>{                 
                handleError(error);                               
            });
        }
        fetchEvents();                               
        
    },[snake, user])

    
    const handleSnakeEvents = (data) => {
        setSnakeEvents(data);
        setIsLoading(false);                 
    }

    const handleError = (error) => {
        (error.code === 401 && setIsLoggedIn(false)) || console.log(error.message)           
    }

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
            { isLoading && <Loading />} 

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