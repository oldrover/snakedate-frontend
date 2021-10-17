import { Details } from './Details';

export const Dashboard = (props) => {
    return (
        <div className="Dashboard">                
            <Details snake={props.snake}/>
        </div>
        );    
}
