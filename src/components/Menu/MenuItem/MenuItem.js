import './MenuItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuItem = (props) => {
    const item = props.item;

    return (
        <div className='menu_item'>
            <FontAwesomeIcon icon={item.icon} />
            <div className='menu_item_name'>
                {item.name}                
            </div>
        </div>
    )
}