import { useSelector, useDispatch } from 'react-redux';
import { resetSnakes } from '../../app/features/snakes/snakeSlice';
import { logoutUser } from '../../app/features/user/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const NavUser = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);    

    const handleClick = () => {        
        dispatch(resetSnakes());
        dispatch(logoutUser());                
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