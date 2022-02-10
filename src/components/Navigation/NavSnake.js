import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown  } from '@fortawesome/free-solid-svg-icons';

import { SnakeList } from './SnakeList';

export const NavSnake = (props) => {

    const user = props.user;
    const snake = props.snake;
    const setSnake = props.setSnake;

    const [showList, setShowList] = useState(false);

    const handleClick = (e) => {        
        setSnake(JSON.parse(e.target.value));        
    }

    const handleAddClick = () => {
        const formData = {              
            formType: 'snake'
        };
        props.handleShowForm(true, formData);
    }

    //const handleDeleteClick = () => {}

    const handleReveal = () => {
        showList === true ? setShowList(false) : setShowList(true);        
    }

    return (
        <div className='nav_snake' onClick={handleReveal}>  

            <SnakeList 
            snake={snake}            
            user={user}
            handleAddClick={handleAddClick}
            handleClick={handleClick}
            showList={showList}
            />

            <div className='snake_button'>
                <div className='nav_snake_name'>
                    {snake.name}
                </div> 

                <div className='nav_snake_bars'>
                    <FontAwesomeIcon icon={faCaretSquareDown} />
                </div>
            </div>
            
        </div> 
    )
}
