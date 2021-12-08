import { Details } from './Details';

export const Dashboard = (props) => {

    const snake = props.snake;
    return (
        <div className='dashboard'>                
            <Details snake={snake}/>
        </div>
        );    
}
