import './ChangeSnake.css';
import { useState } from 'react';

import { SnakeList } from './SnakeList';

export const ChangeSnake = (props) => {

    let imgSrc = 'images/snake_S.jpg';

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

    const handleReveal = () => {
        showList === true ? setShowList(false) : setShowList(true);        
    }

    return (
        <div className='change_snake' onClick={handleReveal}>  
            
            <SnakeList                            
                user={user}
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
