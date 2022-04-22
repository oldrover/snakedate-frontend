import { useSelector } from 'react-redux';

import { Details } from './Details';
import { ListAllSnakes } from './ListAllSnakes';


export const Dashboard = () => {

    const snake = useSelector(state => state.snake.chosenSnake);
    
    return (
        <div className='dashboard'> 
            <div className='details_name'>{snake.name}</div>               
            <Details snake={snake}/>
            <ListAllSnakes />
        </div>
        );    
}
