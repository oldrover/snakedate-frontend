import './ChangeSnake.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnake } from '../../../app/features/snakes/snakeSlice';

import { SnakeList } from './SnakeList';
import { resetEvents } from '../../../app/features/events/eventSlice';

export const ChangeSnake = (props) => {
    
    const dispatch = useDispatch();
    const handleShowForm = props.handleShowForm;
    const snake = useSelector(state => state.snake.chosenSnake);
    const snakes = useSelector(state => state.snake.snakes);

    const [showList, setShowList] = useState(false);
    
    let imgSrc = 'images/snake_S.jpg';


    const handleClick = (e) => {  
        dispatch(setSnake(JSON.parse(e.target.value)));
        dispatch(resetEvents());
    }

    const handleAddClick = () => {
        const formData = {              
            formType: 'snake'
        };
        handleShowForm(true, formData);
    }

    const handleReveal = () => {
        showList === true ? setShowList(false) : setShowList(true);        
    }

    return (
        <div className='change_snake' onClick={handleReveal}>  
            
            <SnakeList                            
                snakes={snakes}
                handleAddClick={handleAddClick}
                handleClick={handleClick}
                showList={showList}
                setShowList={setShowList}
            />

            <div className='snake_button'>                
                <img className='snake_img' src={imgSrc} alt='snake'/>    
                <div className='snake_name'>
                    {snake.name}
                </div> 
            </div>
            
        </div> 
    )
}
