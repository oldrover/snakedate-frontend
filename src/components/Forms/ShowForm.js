import { EventForm } from './EventForm';
import { SnakeForm} from './SnakeForm';

export const ShowForm = (props) => {

    const snake = props.snake;
    const user = props.user;   
    const formData = props.formData;
    const setIsLoading = props.setIsLoading;
    const handleShowForm = props.handleShowForm;
    

    const handleClose = () => {
        setIsLoading(true);
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