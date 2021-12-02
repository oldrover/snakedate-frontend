import React, { useState, useEffect } from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';

import { Calendar as Cal } from '../../models/Calendar';
import { WeekDays } from './WeekDays';
import { ShowForm } from '../Forms/ShowForm';
import { Loading} from '../Loading';


export const Calendar = (props) => {   

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
                    'Authorization': props.user.jwt              
                    }      
            }; 
            
            fetch(`/api/events/${props.snake.snakeId}`, requestOptions)
            .then(response => response.json())
            .then(data => {                  
                handleSnakeEvents(data);                                 
            }) 
            .catch(error =>{
                console.log(error);
            });
        }
        fetchEvents();        
        
    },[props.snake, props.user, isLoading])

    
    const handleSnakeEvents = (data) => {
        setSnakeEvents(data);
        setIsLoading(false);
    }

    
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

    if (isLoading){
        return(
          <Loading />          
          );
      }   

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
                    calendar.getCalendar().map((day, index) =>  { 
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
                    snake={props.snake} 
                    user={props.user}

                /> 
            }
        </div>
    )    

}