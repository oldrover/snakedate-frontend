import { useState } from 'react';

import './Menu.css';
import { ChangeSnake } from '../ChangeSnake/ChangeSnake';
import { MenuItem } from '../MenuItem/MenuItem';
import { menuItems } from '../MenuStrucuture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Menu = (props) => {

    const user = props.user;
    const snake = props.snake;
    const setSnake = props.setSnake;
    const handleShowForm = props.handleShowForm;

    const [showMenu, setShowMenu] = useState(false);

    
    const showCollapsedMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true); 
        
    }

    return(
        <div className='menu'>
            <ChangeSnake
                user={user}
                snake={snake}
                setSnake={setSnake}
                handleShowForm={handleShowForm}
            />
            <div className='menu_collapsed'
                onClick={showCollapsedMenu}
            >
                <FontAwesomeIcon icon={(showMenu && faMinus) || faPlus}/>
            </div>
            { 
                <div className={(showMenu && 'menu_items' )|| 'menu_items is_collapsed'}>
                {               
                    menuItems.map(item => {
                        return(                        
                            <MenuItem                             
                                item={item}
                                key={item.name}
                            />
                        )
                    })                
                }
                </div> 
                           
            }      
            
        </div>
    )

}