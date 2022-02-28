import './ChangeSnake.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

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
                snake={snake}            
                user={user}
                handleAddClick={handleAddClick}
                handleClick={handleClick}
                showList={showList}
            />

            <div className='snake_button'>
                <div>
                    <div className='snake_img_container'>
                        <img className='snake_img' src={imgSrc} alt='snake'/>   
                        <div className='snake_change_icon'>                 
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>
                    </div>
                </div>
                <div className='snake_name'>
                    {snake.name}
                </div> 
            </div>
            
        </div> 
    )
}
