import { useSelector } from 'react-redux';

import { EventForm } from './EventForm';
import { SnakeForm} from './SnakeForm';



export const ShowForm = (props) => {

    const user = useSelector(state => state.user);
    const snake = useSelector(state => state.snake.chosenSnake);
    
    const { formData, handleShowForm } = props;    
    

    const handleClose = () => {        
        handleShowForm(false, {});  
    }

    return (        
        <div className='show_form'>            
            {
            formData.formType === 'event' && 
                <EventForm 
                    handleClose={handleClose}                    
                    snake={snake}
                    user={user}
                    date={formData.date}
                    dailyEvents={formData.dailyEvents}                    
                />
            }

            {
            formData.formType === 'snake' &&
                <SnakeForm 
                    handleClose={handleClose}
                    user={user}
                />
            }


        </div>
    )
}