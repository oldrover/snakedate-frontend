import './SnakeCard.css';

export const SnakeCard = (props) => {
    const {snake, setSnake} = props;
    
    const handleClick = () => {                      
        setSnake(snake);        
    }

    return (
        <div className='snake_card'                                               
            onClick={handleClick}
        >
            {snake.name}            
        </div>
    )
}