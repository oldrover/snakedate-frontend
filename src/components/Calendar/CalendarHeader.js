import React from "react";

export class CalendarHeader extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let add = 0;
        event.target.value === 'back' ? add = -1 : add = 1;  
        
        this.props.handleMonthChange(add);    
    }

    render() {
        return(
            <div className="CalendarHeader">  
                <div className="Tab">Calendar</div>
                <div>
                    <button value="back" onClick={this.handleClick}>zurück</button>
                </div>                  
                <div>
                    {this.props.calendar.getMonthName()}
                </div>
                <div>
                    <button value="forward" onClick={this.handleClick}>vor</button>
                </div> 
                <div className="CalendarYear">
                    {this.props.calendar.getYear()}
                </div>
            </div>
        )
    }
}