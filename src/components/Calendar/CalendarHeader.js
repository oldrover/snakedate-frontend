import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faCalendar } from '@fortawesome/free-solid-svg-icons';

export class CalendarHeader extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let add ;
        event.target.value === 'back' ? add = 'false' : add = 'true';  
        
        this.props.handleMonthChange(add);    
    }

    render() {
        return(
            <div className="CalendarHeader">  
                <div className="Tab">                    
                    <FontAwesomeIcon icon={faCalendar} />
                    <div>Kalender</div>
                </div>
                <div>
                    <button value="back" onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                </div>                  
                <div>
                    {this.props.calendar.getMonthName()}
                </div>
                <div>
                    <button value="forward" onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div> 
                <div className="CalendarYear">
                    {this.props.calendar.getYear()}
                </div>
            </div>
        )
    }
}