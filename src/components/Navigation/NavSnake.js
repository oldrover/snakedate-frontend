import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const NavSnake = (props) => {

    let imgSrc = 'images/snake.jpg';

    props.snake.image !== '' && (imgSrc = props.snake.image);

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
            <div className='NavSnakeImg'>
                <img src={imgSrc} alt='Snake' /> 
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
                               
            </div>  
            <div className='NavSnakeName'>
                <h1>{props.snake.name}</h1>
                
           
        </div> 
        </div> 
        

    )
}
