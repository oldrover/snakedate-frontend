import React, { useState, useEffect } from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';

import { Calendar as Cal } from '../../models/Calendar';

// Mock Data -----------------------------------------------------------

const snakeEvents = [{
    id: 0,
    snakeId: 0,
    type: 'weight',
    date: new Date('2021.11.10'),
    info: '500g'
},
{
    id: 1,
    snakeId: 1,
    type: 'feed',
    date: new Date('2021.11.23'),
    info: 'jumper' 
},
{
    id: 2,
    snakeId: 1,
    type: 'weight',
    date: new Date('2021.11.23'),
    info: '402g'

}]

// End of Mock Data ----------------------------------------------------


export const Calendar = (props) => {   

    const [calendar, setCalendar] = useState(new Cal(new Date()));
    const [today] = useState(new Date());   

    const handleMonthChange = (add) => {
        const newMonth = calendar.getMonth() + add;         
        const newCal = new Cal(new Date(calendar.getDate().setMonth(newMonth)));        
        setCalendar(newCal);               
    }    

     
    return (
        <div>
            <CalendarHeader 
                handleMonthChange={handleMonthChange}
                calendar={calendar}
            />   
            <div className="WeekDays">
                {calendar.getWeekDays().map(weekDay => <div className="WeekDay">{weekDay}</div>)}
            </div>
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
                            
                        dailyEvents = snakeEvents.filter(e => e.date.getDate() === day
                            && e.date.getMonth() === calendar.getMonth()
                            && e.date.getFullYear() === calendar.getYear()
                        );

                        return <CalendarDay className={clsName} day={day} dailyEvents={dailyEvents}/>
                    })
                }
            </div>                                                              
        </div>
    )    

}