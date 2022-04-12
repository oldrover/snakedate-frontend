import './Navigation.css';
import { NavUser } from './NavUser';

export const Navigation = (props) => { 
    
    const user = props.user;       
    const setIsLoggedIn = props.setIsLoggedIn;
        return (
            <div className='navigation'>                
                <NavUser 
                    user={user} 
                    setIsLoggedIn={setIsLoggedIn}
                /> 
            </div>
        ); 

}
