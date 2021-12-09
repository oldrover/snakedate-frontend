import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faBars  } from '@fortawesome/free-solid-svg-icons';

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

    const handleReveal = () => {
        showList === true ? setShowList(false) : setShowList(true);        
    }

    return (
        <div className='nav_snake' onClick={handleReveal}> 
            <div id='snake_list' className= {(showList && 'snake_list show_list') || 'snake_list'}>                
                <div>
                    {user.snakes.map(sn =>{                            
                        return (                                
                            <button className='snake_list_item' key={sn.id + sn.name}
                                value={JSON.stringify(sn)}                                   
                                onClick={handleClick}                                    
                            >
                                {sn.name}                                    
                            </button>
                        );
                    })}

                    <button className='snake_list_item add_snake' key='addNewSnake'
                        value='add'                                   
                        onClick={handleAddClick}                                                              
                    >
                        <FontAwesomeIcon icon={faPlusCircle} />                                    
                    </button>

                </div>
            </div>  
        <div className='nav_snake_name'>
            {snake.name}
        </div> 

        <div className='nav_snake_bars'>
            <FontAwesomeIcon icon={faBars} />
        </div>
    </div> 
    )
}
