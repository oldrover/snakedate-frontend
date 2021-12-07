import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const NavUser = (props) => {
    return (
        <div className="NavUser">
            <div className="Headline">
                SnakePlanner
            </div>
            <div className="UserMenu">            
                {props.user.name}
                <FontAwesomeIcon className='UserIcon' icon={faUserCircle}/>  
            </div> 
        </div>
    )
}