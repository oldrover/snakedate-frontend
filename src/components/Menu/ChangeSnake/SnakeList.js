import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { ActionWhenOutside } from '../../../utils/ActionWhenOutside';

export const SnakeList = (props) => {

    const {user, handleAddClick, handleClick, showList, setShowList} = props; 

    if(!showList) {
        return <div className='snake_list'></div>
    }   

    return (                  
        <div className= {(showList && 'snake_list show_list') || 'snake_list'}>
            <ActionWhenOutside action={() => setShowList(false)}>
            {user.snakes.map(snake =>{                            
                return (                                
                    <button className='snake_list_item' key={snake.id + snake.name}
                        value={JSON.stringify(snake)}                                   
                        onClick={handleClick}                                    
                    >
                        {snake.name}                                    
                    </button>
                );
            })}

            <button className='snake_list_item add_snake' key='addNewSnake'
                value='add'                                   
                onClick={handleAddClick}                                                              
            >
                <FontAwesomeIcon icon={faPlusCircle} />                                    
            </button>
            </ActionWhenOutside>

        </div>
        
    )
}

