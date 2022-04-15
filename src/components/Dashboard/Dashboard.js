import { Details } from './Details';
import { ListAllSnakes } from './ListAllSnakes';

export const Dashboard = (props) => {

    const {user, snake, setSnake} = props;
    
    return (
        <div className='dashboard'> 
            <div className='details_name'>{snake.name}</div>               
            <Details snake={snake}/>
            <ListAllSnakes 
                snakes={user.snakes} 
                activeSnake={snake} 
                setSnake={setSnake} 
            />
        </div>
        );    
}
