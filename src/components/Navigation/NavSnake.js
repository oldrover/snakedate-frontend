
export const NavSnake = (props) => {

    let imgSrc = 'images/snake.jpg';

    props.snake.image !== null && (imgSrc = props.snake.image);

    const handleClick = (e) => {        
        props.setSnake(JSON.parse(e.target.value));        
    }

    return (
        <div className="NavSnake">
            <div className="NavSnakeImg">
                <img src={imgSrc} alt="chameleon" /> 
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
