import React, { useState, useEffect } from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';

import { Calendar as Cal } from '../../models/Calendar';
import { WeekDays } from './WeekDays';
import { ShowForm } from '../Forms/ShowForm';


const url = process.env.REACT_APP_BACKEND_URL;

export const Calendar = (props) => {   

    const [calendar, setCalendar] = useState(new Cal(new Date()));
    const [today] = useState(new Date());  

    const [snakeEvents, setSnakeEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState();
    
    useEffect(() => { 
        return fetch(`${url}/events?snakeId=${props.snake.id}`)
        .then(response => response.json())
        .then(data => {  
          setIsLoading(false);    
          setSnakeEvents(data);          
        }) 
        .catch(error =>{
          console.log(error);
        }); 
      }, [props.snake.id, showForm]);      

    const handleMonthChange = (add) => {
        const newMonth = calendar.getMonth() + add;         
        const newCal = new Cal(new Date(calendar.getDate().setMonth(newMonth)));        
        setCalendar(newCal);               
    } 
    
    const handleShowForm = (show, form) => {
        setFormData(form);
        setShowForm(show);
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
                            
                        let dailyEvents = [];
                            
                        dailyEvents = snakeEvents.filter(e => new Date(e.date).getDate() === day
                            && new Date(e.date).getMonth() === calendar.getMonth()
                            && new Date(e.date).getFullYear() === calendar.getYear()                            
                        );

                        const date = `${calendar.getYear()}.${calendar.getMonth()+1}.${day}`;
                        
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

                /> 
            }
        </div>
    )    

}