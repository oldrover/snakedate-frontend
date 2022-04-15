import { SnakeCard } from "./SnakeCard";

export const ListAllSnakes = (props) => {

    const {snakes, activeSnake, setSnake} = props;

    const filteredSnakeList = () => {        
        return (
            snakes.filter((snake) => snake.snakeId !== activeSnake.snakeId)
                .map((snake) => {
                    return (
                        <SnakeCard 
                            snake={snake} 
                            setSnake={setSnake} 
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