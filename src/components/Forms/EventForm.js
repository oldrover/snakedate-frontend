import { FormHeader } from "./FormHeader";

export const EventForm = (props) => {
    
    return (
        <div className="EventForm">            
            <FormHeader handleClose={props.handleClose} />
           

            <form class="Form">

                <label for="snake_name">
                    Snake:
                </label>
                <input id="snake_name" value={props.snake.name} />  
                <label for="event_date">  
                    Date:                  
                </label>
                <input id="event_date" value={props.date} />
                


                

                <label for="select_type">   
                    Event Type:             
                </label>
                <select id="select_type">
                    <option value="feed">Feed</option>
                    <option value="poop">Poop</option>
                    <option value="weight">Weight</option>
                </select>
                <label for="info_field">
                    Info:
                </label>
                <textarea>

                </textarea>
                


            </form>
"id": 1,
    "snakeId": 1,
    "type": "feed",
    "date": "2021.11.23",
    "info": "jumper"
            
            
            
            
            
            
        </div>
    )
}