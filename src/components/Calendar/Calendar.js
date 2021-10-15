import React from 'react';

import { CalendarHeader } from './CalendarHeader';

import { Calendar as Cal } from '../../models/Calendar';



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
                <div className="Calendar">  
                   {
                        this.state.calendar.getCalendar().map(day =>  { 
                            let clsName = ''
                            day === this.state.today.getDate() 
                            && this.state.calendar.getMonth() === this.state.today.getMonth()
                                ? clsName = "Day Today"
                                : clsName = "Day"
                            return <div className={clsName}>{day}</div>
                        })
                   }
                </div>                                               
            </div>
        )
    }

}