import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const NavUser = (props) => {

    const user = props.user;
    const setIsLoggedIn = props.setIsLoggedIn;

    const handleClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className='nav_user'>
            <div className='headline'>
                SnakePlanner
            </div>
            <div className='user_menu'>            
                {user.name}
                <FontAwesomeIcon 
                    className='logout' 
                    icon={faSignOutAlt}
                    onClick={handleClick}
                />  
            </div> 
        </div>
    )
}