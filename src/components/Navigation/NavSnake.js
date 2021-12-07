import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle, faCaretSquareDown  } from '@fortawesome/free-solid-svg-icons';

export const NavSnake = (props) => {

    const handleClick = (e) => {        
        props.setSnake(JSON.parse(e.target.value));        
    }

    const handleAddClick = () => {
        const formData = {              
            formType: 'snake'
        };
        props.handleShowForm(true, formData);
    }

    return (
        <div className='NavSnake'>                           
                <div id='Overlay'></div> 
                <div id='SnakeList' className='SnakeList'>                
                    <div>
                        {props.user.snakes.map(snake =>{                            
                            return (                                
                                <button className='SnakeListItem' key={snake.id + snake.name}
                                    value={JSON.stringify(snake)}                                   
                                    onClick={handleClick}                                    
                                >
                                    {snake.name}                                    
                                </button>
                            );
                        })}

                        <button className='SnakeListItem AddSnake' key='addNewSnake'
                            value='add'                                   
                            onClick={handleAddClick}                                                              
                        >
                            <FontAwesomeIcon icon={faPlusCircle} />                                    
                        </button>

                    </div>
                </div>  
            <div className='NavSnakeName'>
                {props.snake.name}
            </div> 

            <div className='NavSnakeCaret'>
                <FontAwesomeIcon icon={faCaretSquareDown} />
            </div>
        </div> 
        

    )
}
