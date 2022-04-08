import { Details } from './Details';

export const Dashboard = (props) => {

    const snake = props.snake;
    return (
        <div className='dashboard'> 
            <div>{snake.name}</div>               
            <Details snake={snake}/>
        </div>
        );    
}
