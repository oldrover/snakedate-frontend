import React, { useState, useEffect } from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';

import { Calendar as Cal } from '../../models/Calendar';
import { WeekDays } from './WeekDays';
import { ShowForm } from '../Forms/ShowForm';


export const Calendar = (props) => {   

    const [calendar, setCalendar] = useState(new Cal(new Date()));
    const [today] = useState(new Date());  

    const [snakeEvents, setSnakeEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState();

    
    
    useEffect(() => { 
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': props.user.jwt               
             }      
        }; 

        return fetch(`/api/events/${props.snake.snakeId}`, requestOptions)
        .then(response => response.json())
        .then(data => {  
          setIsLoading(false);    
          setSnakeEvents(data);                  
        }) 
        .catch(error =>{
          console.log(error);
        }); 
      }, [props.snake.snakeId, props.user, showForm, snakeEvents, calendar]);      

    const handleMonthChange = (add) => {
        const newMonth = calendar.getMonth() + add;         
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

        return `${calendar.getYear()}.${month}.${day}`;
    }

    isLoading && <div>...loading</div>; 
     
    return (
        <div>    
            <CalendarHeader 
                handleMonthChange={handleMonthChange}
                calendar={calendar}
            /> 
            <WeekDays
                calendar={calendar}
            />              
            <div className="CalendarBody">  
                {
                    calendar.getCalendar().map(day =>  { 
                        let clsName = ''
                        day === today.getDate() 
                        && calendar.getMonth() === today.getMonth()
                        && calendar.getYear() === today.getFullYear()
                            ? clsName = "Day Today"
                            : clsName = "Day"                            
                     
                        const dailyEvents = filterEvents(snakeEvents, day);                     
                        const date = formatDate(day);
                        
                        return (                         
                            <CalendarDay 
                                className={clsName} 
                                day={day} 
                                date={date}                                
                                dailyEvents={dailyEvents}
                                handleShowForm={handleShowForm}
                            />                        
                        )
                    })
                }
            </div>  
            { showForm && 
                <ShowForm 
                    formData={formData}                    
                    handleShowForm={handleShowForm}  
                    snake={props.snake} 
                    user={props.user}

                /> 
            }
        </div>
    )    

}