import React from 'react';

import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';

import { Calendar as Cal } from '../../models/Calendar';

// Mock Data -----------------------------------------------------------

const snakeEvents = [{
    id: 0,
    type: 'weight',
    date: new Date('2021.11.10'),
    info: '500g'
},
{
    id: 1,
    type: 'feed',
    date: new Date('2021.11.23'),
    info: 'jumper' 
},
{
    id: 2,
    type: 'weight',
    date: new Date('2021.11.23'),
    info: '502g'

}]

// End of Mock Data ----------------------------------------------------


export class Calendar extends React.Component {
    constructor(props) {
        super(props);  

        const cal = new Cal(new Date());
        const today = new Date();        
        
        this.state = {
            calendar: cal,
            today: today
        }         
        this.handleMonthChange = this.handleMonthChange.bind(this);        
    }

    handleMonthChange(add) {
        const newMonth = this.state.calendar.getMonth() + add;         
        const newCal = new Cal(new Date(this.state.calendar.getDate().setMonth(newMonth)));
        
        this.setState(
            {
            calendar: newCal
            }
        );         
    }    

    render() { 
        return (
            <div>
                <CalendarHeader 
                    handleMonthChange={this.handleMonthChange}
                    calendar={this.state.calendar}
                />   
                <div className="WeekDays">
                    {this.state.calendar.getWeekDays().map(weekDay => <div className="WeekDay">{weekDay}</div>)}
                </div>
                <div className="CalendarBody">  
                   {
                        this.state.calendar.getCalendar().map(day =>  { 
                            let clsName = ''
                            day === this.state.today.getDate() 
                            && this.state.calendar.getMonth() === this.state.today.getMonth()
                            && this.state.calendar.getYear() === this.state.today.getFullYear()
                                ? clsName = "Day Today"
                                : clsName = "Day"
                            
                            let dailyEvents = [];
                            
                            dailyEvents = snakeEvents.filter(e => e.date.getDate() === day
                                && e.date.getMonth() === this.state.calendar.getMonth()
                                && e.date.getFullYear() === this.state.calendar.getYear()
                            );

                            return <CalendarDay className={clsName} day={day} dailyEvents={dailyEvents}/>
                        })
                   }
                </div>  
                                                            
            </div>
        )
    }

}