import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const NavUser = (props) => {
    return (
        <div className="nav_user">
            <div className="headline">
                SnakePlanner
            </div>
            <div className="user_menu">            
                {props.user.name}
                <FontAwesomeIcon className='user_icon' icon={faUserCircle}/>  
            </div> 
        </div>
    )
}