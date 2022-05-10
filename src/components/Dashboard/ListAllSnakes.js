import { useSelector } from "react-redux";
import { SnakeCard } from "./SnakeCard";


export const ListAllSnakes = () => {
    
    const snakes = useSelector(state => state.snake.snakes);
    const activeSnake = useSelector(state => state.snake.chosenSnake);
    

    const filteredSnakeList = () => {        
        return (
            snakes.filter((snake) => snake.snakeId !== activeSnake.snakeId)
                .map((snake) => {
                    return (
                        <SnakeCard 
                            snake={snake}                             
                            key={snake.snakeId}
                        />
                    )
                })
        )
    }
    
    return (
        <div className='all_snakes'> 
            {            
            filteredSnakeList()
            }
        </div>
    )
}