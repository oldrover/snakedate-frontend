
export const NavSnake = (props) => {

    const imgSrc = 'images/snake.jpg';

    const handleClick = (e) => {        
        props.setSnake(JSON.parse(e.target.value));        
    }

    return (
        <div className="NavSnake">
            <div className="NavSnakeImg">
                <img src={props.snake.image} alt="chameleon" /> 
                <div id="Overlay"></div> 
                <div id="SnakeList" className="SnakeList">                
                    <div>
                        {props.user.snakes.map(snake =>{                            
                            return (                                
                                <button className="SnakeListItem" key={snake.id + snake.name}
                                    value={JSON.stringify(snake)}                                   
                                    onClick={handleClick}                                    
                                >
                                    {snake.name}                                    
                                </button>
                            );
                        })}
                    </div>
                </div>  
                               
            </div>  
            <div className="NavSnakeName">
                <h1>{props.snake.name}</h1>
                
           
        </div> 
        </div> 
        

    )
}
