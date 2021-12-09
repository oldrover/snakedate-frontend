import React, { useState, useEffect } from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';

import { Calendar as Cal } from '../../models/Calendar';
import { WeekDays } from './WeekDays';
import { ShowForm } from '../Forms/ShowForm';
import { Loading} from '../Loading/Loading';
import { Inactive } from '../Inactive';


export const Calendar = (props) => {   

    const user = props.user;
    const snake = props.snake;

    const [calendar, setCalendar] = useState(new Cal(new Date()));
    const [today] = useState(new Date());  

    const [snakeEvents, setSnakeEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);    
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState();   
     
    
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
                console.log(error);
            });
        }
        fetchEvents();                       
        
    },[snake, user, isLoading])

    
    const handleSnakeEvents = (data) => {
        setSnakeEvents(data);
        setIsLoading(false);         
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
    
    const handleShowForm = (show, form) => {
        setFormData(form);
        setShowForm(show);
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

    if (isLoading){
        return(
          <Loading />          
          );
      } 

    return (
        <div className='calendar'>    
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
            { showForm && 
                <ShowForm 
                    formData={formData}                    
                    handleShowForm={handleShowForm} 
                    setIsLoading={setIsLoading}                    
                    snake={snake} 
                    user={user}

                /> 
            }
            {
                snake.id === '' && (
                 <Inactive />
                )
            }
        </div>
    )    

}