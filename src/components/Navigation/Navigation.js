import { NavSnake } from './NavSnake';

export const Navigation = (props) => {    
        return (
            <div className="Navigation">
                <NavSnake user={props.user}/>                               
                <div className="NavUser">
                {props.user.name}
                    <div className="UserIcon"></div>  
                </div>
            </div>
        ); 

}
