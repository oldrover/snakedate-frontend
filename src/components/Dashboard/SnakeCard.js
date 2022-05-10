import { useDispatch } from 'react-redux';
import { setSnake } from '../../app/features/snakes/snakeSlice';

import './SnakeCard.css';

export const SnakeCard = (props) => {

    const dispatch = useDispatch();
    const snake = props.snake;
    
    const handleClick = () => {                      
        dispatch(setSnake(snake));        
    }

    return (
        <div className='snake_card'                                               
            onClick={handleClick}
        >
            {snake.name}            
        </div>
    )
}