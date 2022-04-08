import { Link } from 'react-router-dom';

import './MenuItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuItem = (props) => {
    const item = props.item;

    return (
        <div className='menu_item'>
            <Link to={item.link} className='menu_link'>
                <FontAwesomeIcon className='menu_icon' icon={item.icon}/>
                <div className='menu_item_name'>
                    {item.name}                
                </div>
            </Link>
        </div>
    )
}