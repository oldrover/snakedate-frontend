import { NavSnake } from './NavSnake';
import { NavUser } from './NavUser';

export const Navigation = (props) => {    
        return (
            <div className="Navigation">
                <NavSnake user={props.user} /> 
                <NavUser user={props.user} />  
            </div>
        ); 

}
