import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const SnakeList = (props) => {

    const user = props.user;   
    const handleAddClick = props.handleAddClick;
    const handleClick = props.handleClick;
    const showList = props.showList;
    

    return (                        
        <div className= {(showList && 'snake_list show_list') || 'snake_list'}>
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

        </div>
    )
}

